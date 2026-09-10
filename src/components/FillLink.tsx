import { motion } from "motion/react";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type PointerEvent as ReactPointerEvent,
} from "react";

const FILL_DURATION = 0.5;
const FILL_EASE = [0.16, 1, 0.3, 1] as const;

function coverDiameter(width: number, height: number, x: number, y: number) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y)
      )
  );
}

type AnchorAttributesForMotion = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onAnimationStart"
  | "onDrag"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDragStart"
  | "onDrop"
>;

interface FillLinkProps extends AnchorAttributesForMotion {
  fillColor: string;
  fillTextColor: string;
}

// A button/link whose fill grows from the point the user actually pressed or
// hovered, rather than fading uniformly — see apple-design skill, "response"
// and "direct manipulation": feedback should originate from where the input happened.
export function FillLink({
  fillColor,
  fillTextColor,
  className,
  children,
  style,
  onPointerEnter,
  onPointerMove,
  onPointerLeave,
  onFocus,
  onBlur,
  ...props
}: FillLinkProps) {
  const nodeRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [coverSize, setCoverSize] = useState(0);

  const updateOrigin = useCallback((x: number, y: number) => {
    const node = nodeRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setOrigin({ x, y });
    setCoverSize(coverDiameter(rect.width, rect.height, x, y));
  }, []);

  const updateFromPointer = useCallback(
    (e: ReactPointerEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      updateOrigin(e.clientX - rect.left, e.clientY - rect.top);
    },
    [updateOrigin]
  );

  const updateFromCenter = useCallback(() => {
    const node = nodeRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    updateOrigin(rect.width / 2, rect.height / 2);
  }, [updateOrigin]);

  useLayoutEffect(() => {
    const node = nodeRef.current;
    if (!node || !hovered) return;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      setCoverSize(coverDiameter(rect.width, rect.height, origin.x, origin.y));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [hovered, origin.x, origin.y]);

  return (
    <motion.a
      {...props}
      ref={nodeRef}
      className={className}
      style={{ ...style, position: "relative", overflow: "hidden", color: hovered ? fillTextColor : undefined }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.16 }}
      onPointerEnter={(e) => {
        onPointerEnter?.(e);
        updateFromPointer(e);
        setHovered(true);
      }}
      onPointerMove={(e) => {
        onPointerMove?.(e);
      }}
      onPointerLeave={(e) => {
        onPointerLeave?.(e);
        setHovered(false);
      }}
      onFocus={(e) => {
        onFocus?.(e);
        if (e.currentTarget.matches(":focus-visible")) {
          updateFromCenter();
          setHovered(true);
        }
      }}
      onBlur={(e) => {
        onBlur?.(e);
        setHovered(false);
      }}
    >
      <motion.span
        aria-hidden
        className="fill-link__circle"
        initial={false}
        animate={{ scale: hovered && coverSize > 0 ? 1 : 0 }}
        transition={{ duration: FILL_DURATION, ease: FILL_EASE }}
        style={{
          background: fillColor,
          width: coverSize,
          height: coverSize,
          left: origin.x,
          top: origin.y,
        }}
      />
      <span className="fill-link__label">{children}</span>
    </motion.a>
  );
}

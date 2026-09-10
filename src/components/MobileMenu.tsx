import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { person } from "../content/profile";
import { LinkedInIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./ContactIcons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const PANEL_EASE = [0.76, 0, 0.24, 1] as const;
const LINK_EASE = [0.16, 1, 0.3, 1] as const;

const PANEL_ANIMATION = {
  initial: { x: "100%" },
  enter: { x: "0%", transition: { duration: 0.6, ease: PANEL_EASE } },
  exit: { x: "100%", transition: { duration: 0.5, ease: PANEL_EASE } },
};

function CurveEdge() {
  const h = typeof window !== "undefined" ? window.innerHeight : 800;
  const initialPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;

  return (
    <svg className="mobile-menu__curve" preserveAspectRatio="none">
      <motion.path
        fill="var(--white)"
        initial={{ d: initialPath }}
        animate={{ d: targetPath, transition: { duration: 0.7, ease: PANEL_EASE } }}
        exit={{ d: initialPath, transition: { duration: 0.5, ease: PANEL_EASE } }}
      />
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`mobile-menu__trigger${open ? " is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="mobile-menu__panel"
            variants={PANEL_ANIMATION}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <CurveEdge />
            <nav className="mobile-menu__nav">
              <span className="mobile-menu__eyebrow">Navigation</span>
              <ul>
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: LINK_EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={() => {
                        // Unlock scroll immediately so the anchor's native
                        // hash-jump isn't racing the body overflow reset.
                        document.body.style.overflow = "";
                        setOpen(false);
                      }}
                    >
                      <span className="mobile-menu__index">{i + 1}.</span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu__footer">
              <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${person.email}`} aria-label="Email">
                <MailIcon />
              </a>
              <a href={person.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href={`tel:${person.phone.replace(/\s+/g, "")}`} aria-label="Phone">
                <PhoneIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

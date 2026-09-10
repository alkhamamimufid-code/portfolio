import { useEffect, useRef, useState } from "react";
import type { CertificateFile } from "../content/certificateFiles.generated";
import { CategoryBadge } from "./CategoryBadge";
import { categoryLogos } from "../content/categoryLogos";

interface Props {
  cert: CertificateFile;
  closing: boolean;
  onClose: () => void;
}

export function CertificateModal({ cert, closing, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Own mount/unmount lifetime only — see the identical note in
  // CertificateFolderModal for why this can't depend on `onClose`.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const visible = mounted && !closing;

  return (
    <div
      className={`cert-modal-backdrop${visible ? " cert-modal-backdrop--visible" : ""}`}
      onClick={onClose}
    >
      <div
        className={`cert-modal${visible ? " cert-modal--visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={cert.title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cert-modal__header">
          <div className="cert-modal__heading">
            {categoryLogos[cert.category] ? (
              <span className="cert-modal__badge cert-modal__badge--logo">
                <img src={categoryLogos[cert.category]} alt="" />
              </span>
            ) : (
              <CategoryBadge category={cert.category} className="cert-modal__badge" />
            )}
            <div>
              <h3 className="cert-modal__title">{cert.title}</h3>
              <p className="cert-modal__category">{cert.category}</p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="cert-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </header>

        <div className="cert-modal__body">
          {cert.type === "image" ? (
            <img src={cert.url} alt={cert.title} className="cert-modal__image" />
          ) : (
            <iframe src={cert.url} title={cert.title} className="cert-modal__frame" />
          )}
        </div>

        <footer className="cert-modal__footer">
          <a href={cert.url} target="_blank" rel="noreferrer" className="cert-modal__link">
            Open in new tab ›
          </a>
        </footer>
      </div>
    </div>
  );
}

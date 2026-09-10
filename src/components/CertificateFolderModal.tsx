import { useEffect, useRef } from "react";
import type { CertificateFile } from "../content/certificateFiles.generated";
import { colorFor, initialsFor } from "./CategoryBadge";
import { categoryLogos } from "../content/categoryLogos";

interface Props {
  category: string;
  certs: CertificateFile[];
  onClose: () => void;
  onOpenCert: (cert: CertificateFile) => void;
}

export function CertificateFolderModal({ category, certs, onClose, onOpenCert }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

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

  const color = colorFor(category);
  const logo = categoryLogos[category];

  return (
    <div className="cert-modal-backdrop cert-modal-backdrop--visible" onClick={onClose}>
      <div
        className="cert-folder-modal cert-modal--visible"
        role="dialog"
        aria-modal="true"
        aria-label={category}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cert-modal__header">
          <div className="cert-modal__heading">
            {logo ? (
              <span className="cert-modal__badge cert-modal__badge--logo">
                <img src={logo} alt="" />
              </span>
            ) : (
              <span className="cert-modal__badge" style={{ background: color }}>
                {initialsFor(category)}
              </span>
            )}
            <div>
              <h3 className="cert-modal__title">{category}</h3>
              <p className="cert-modal__category">
                {certs.length} certificate{certs.length === 1 ? "" : "s"}
              </p>
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

        <div className="cert-folder-modal__list">
          {certs.map((cert) => (
            <button
              type="button"
              className="cert-folder-row"
              key={`${cert.category}-${cert.fileName}`}
              onClick={() => onOpenCert(cert)}
            >
              <span className="cert-folder-row__text">
                <span className="cert-folder-row__title">{cert.title}</span>
              </span>
              <span className="cert-folder-row__chevron">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

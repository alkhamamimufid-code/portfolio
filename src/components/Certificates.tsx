import { useCallback, useMemo, useState } from "react";
import { certificateFiles } from "../content/certificateFiles.generated";
import type { CertificateFile } from "../content/certificateFiles.generated";
import { colorFor, initialsFor } from "./CategoryBadge";
import { categoryLogos } from "../content/categoryLogos";
import { FolderIcon } from "./FolderIcon";
import { CertificateFolderModal } from "./CertificateFolderModal";
import { CertificateModal } from "./CertificateModal";
import { Reveal } from "./Reveal";
import { onSpotlightMove } from "../hooks/useSpotlight";

const CLOSE_DURATION = 220;
const ALL = "All";

export function Certificates() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const [activeCert, setActiveCert] = useState<CertificateFile | null>(null);
  const [certClosing, setCertClosing] = useState(false);

  const folders = useMemo(() => {
    const names = Array.from(new Set(certificateFiles.map((c) => c.category))).sort((a, b) =>
      a.localeCompare(b)
    );
    return [
      { name: ALL, count: certificateFiles.length },
      ...names.map((name) => ({
        name,
        count: certificateFiles.filter((c) => c.category === name).length,
      })),
    ];
  }, []);

  const certsInFolder =
    activeFolder === ALL
      ? certificateFiles
      : certificateFiles.filter((c) => c.category === activeFolder);

  const openFolder = useCallback((name: string) => {
    setActiveFolder(name);
  }, []);

  const closeFolder = useCallback(() => {
    setActiveFolder(null);
  }, []);

  const openCert = useCallback((cert: CertificateFile) => {
    setActiveCert(cert);
    setCertClosing(false);
  }, []);

  const closeCert = useCallback(() => {
    setCertClosing(true);
    setTimeout(() => setActiveCert(null), CLOSE_DURATION);
  }, []);

  return (
    <section className="section section--wash" id="certificates">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Certificates</span>
            <h2 className="section__title">
              {certificateFiles.length} certificates &amp; honors
            </h2>
            <p className="section__lede">
              Organized the way I actually keep them — open a folder, then a certificate.
            </p>
          </div>
        </Reveal>

        <div className="folder-grid">
          {folders.map((folder, i) => {
            const logo = categoryLogos[folder.name];
            return (
              <Reveal key={folder.name} delay={(i % 10) * 40}>
                <button
                  type="button"
                  className="folder-card spotlight"
                  onClick={() => openFolder(folder.name)}
                  onPointerMove={onSpotlightMove}
                >
                  <span className="folder-card__logo-wrap">
                    {folder.name === ALL ? (
                      <FolderIcon color="var(--accent)" className="folder-card__icon" />
                    ) : logo ? (
                      <img src={logo} alt="" className="folder-card__logo" />
                    ) : (
                      <span
                        className="folder-card__initials"
                        style={{ background: colorFor(folder.name) }}
                      >
                        {initialsFor(folder.name)}
                      </span>
                    )}
                  </span>
                  <span className="folder-card__name">{folder.name}</span>
                  <span className="folder-card__count">{folder.count}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {activeFolder && (
        <CertificateFolderModal
          category={activeFolder}
          certs={certsInFolder}
          onClose={closeFolder}
          onOpenCert={openCert}
        />
      )}

      {activeCert && (
        <CertificateModal cert={activeCert} closing={certClosing} onClose={closeCert} />
      )}
    </section>
  );
}

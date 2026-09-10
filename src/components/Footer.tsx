import { useState } from "react";
import { person } from "../content/profile";
import { FillLink } from "./FillLink";
import { ArrowUpRightIcon, MailIcon, WhatsAppIcon } from "./ContactIcons";

export function Footer() {
  const [clicked, setClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const year = new Date().getFullYear();

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setShowSuccess(true), 500);
  };

  return (
    <footer
      className={`close-cta${clicked ? " is-clicked" : ""}${showSuccess ? " is-success" : ""}`}
      id="contact"
    >
      <div className="close-cta__stage">
        <div className="close-cta__idle">
          <div className="close-cta__badge">
            <span className="close-cta__ping">
              <span className="close-cta__ping-ring" />
              <span className="close-cta__ping-dot" />
            </span>
            Available for projects
          </div>

          <button type="button" className="close-cta__headline" onClick={handleClick}>
            <h2 className="close-cta__title">
              <span className="close-cta__line-wrap">
                <span className="close-cta__line">Let&rsquo;s work</span>
              </span>
              <span className="close-cta__line-wrap">
                <span className="close-cta__line close-cta__line--muted">together</span>
              </span>
            </h2>
            <span className="close-cta__orb">
              <span className="close-cta__orb-ring" />
              <ArrowUpRightIcon className="close-cta__orb-arrow" />
            </span>
          </button>

          <p className="close-cta__sub">
            Have a project in mind? I&rsquo;d love to hear about it. Let&rsquo;s create
            something exceptional together.
          </p>
        </div>

        <div className="close-cta__success">
          <span className="eyebrow">Perfect</span>
          <h3 className="close-cta__success-title">Let&rsquo;s talk</h3>
          <div className="close-cta__actions">
            <FillLink
              className="btn close-cta__btn close-cta__btn--whatsapp"
              href={person.whatsapp}
              target="_blank"
              rel="noreferrer"
              fillColor="#128C7E"
              fillTextColor="var(--on-accent)"
            >
              <WhatsAppIcon className="close-cta__btn-icon" />
              WhatsApp
            </FillLink>
            <FillLink
              className="btn close-cta__btn close-cta__btn--email"
              href={`mailto:${person.email}`}
              fillColor="var(--ink)"
              fillTextColor="var(--white)"
            >
              <MailIcon className="close-cta__btn-icon" />
              Email
            </FillLink>
          </div>
          <span className="close-cta__success-sub">{person.email}</span>
        </div>
      </div>

      <div className="container">
        <hr className="rule" />
        <div className="footer__bottom">
          <span>
            {person.name} · {person.location}
          </span>
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}

import { person } from "../content/profile";
import { LiquidGlassButton } from "./LiquidGlassButton";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__mark">
        Mufid Alkhamami
      </a>
      <ul className="header__nav">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="header__right">
        <LiquidGlassButton href={person.cvPath} download>
          Download CV
        </LiquidGlassButton>
        <MobileMenu />
      </div>
    </header>
  );
}

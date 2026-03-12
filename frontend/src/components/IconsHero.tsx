import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import "../css/iconsHero.css";

type IconItem = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
};

const icons: IconItem[] = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/UmbertoCarbone",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/umberto-carbone-6a1744386/",
  },
  {
    icon: MailIcon,
    label: "Email",
    href: "mailto:umberto.carb.dev@gmail.com",
  },
];

export default function IconsHero() {
  return (
    <div className="icons-hero-wrapper">
      {icons.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="icons-hero-link"
          aria-label={label}
        >
          <span className="icons-hero-spin-border violet-gradient-spin" />
          <span className="icons-hero-inner">
            <Icon size={20} />
          </span>
        </a>
      ))}
    </div>
  );
}

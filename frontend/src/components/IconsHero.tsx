import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

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
    <div className="flex justify-center gap-6">
      {icons.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 rounded-full flex items-center justify-center hover:scale-125 transition-all"
          aria-label={label}
        >
          <span className="absolute inset-0 rounded-full animate-spin violet-gradient-spin"/>
          <span className="relative w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:text-violet-400 transition-colors">
            <Icon size={20} />
          </span>
        </a>
      ))}
    </div>
  );
}

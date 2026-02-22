import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export default function IconsHero() {
  return (
    <div className="flex justify-center gap-6">
      {[
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
      ].map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-violet-400 transition-all border border-slate-700 hover:scale-110"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}

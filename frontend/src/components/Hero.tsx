import { GithubIcon, LinkedinIcon, MailIcon, PlayIcon, PauseIcon } from "lucide-react";
import Lightning from "./Lightning";
import { useEffect, useState } from "react";

function useXOffset() {
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setXOffset(0.6); // Fulmine a destra su desktop
      } else if (width >= 768) {
        setXOffset(0);
      } else {
        setXOffset(-0.2);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return xOffset;
}

export default function Hero() {
  const xOffset = useXOffset();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center">
      {/* 1. BOTTONE PAUSA */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-6 left-6 z-50 p-3 bg-slate-800/40 hover:bg-violet-600/60 text-white rounded-full transition-all border border-slate-700 backdrop-blur-md"
      >
        {isPaused ? (
          <PlayIcon size={20} className="fill-current" />
        ) : (
          <PauseIcon size={20} />
        )}
      </button>

      {/* 2. LIGHTNING BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning
          key={isPaused ? "paused" : "playing"}
          hue={260}
          xOffset={xOffset}
          speed={isPaused ? 0 : 0.8}
          intensity={1}
          size={1}
        />
      </div>

      {/* 3. CONTENUTO HERO */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:pr-16 flex justify-end">
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          {/* Avatar centrato */}
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-400 to-violet-700 p-1 shadow-lg shadow-violet-500/20">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-violet-400">
                  JD
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center border-4 border-slate-950">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Junior Full Stack <br />
            <span className="text-violet-500">Developer</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-xl">
            Trasformo idee in esperienze digitali moderne e performanti
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#"
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-violet-600/40 hover:scale-105"
            >
              Vedi i miei progetti
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 hover:border-violet-500/50"
            >
              Scarica CV
            </a>
          </div>

          {/* SOCIAL ICONS */}
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
        </div>
      </div>
    </div>
  );
}

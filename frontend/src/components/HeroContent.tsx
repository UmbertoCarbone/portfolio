import { FileUser } from "lucide-react";
import { Link } from "react-router-dom";
import IconsHero from "./IconsHero";

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full px-6 md:px-12 lg:pr-16 flex justify-end">
      <div className="card-wrapper w-full lg:w-1/2">
        <div className="card-content flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-violet-400 to-violet-700 p-1 shadow-lg shadow-violet-500/20">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/image.png"
                  alt="profile image"
                  className="w-full h-full object-cover"
                />
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
            <Link
              to="/profilo"
              className="px-8 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-all shadow-md shadow-violet-600/20 hover:scale-105"
            >
              Profilo personale
            </Link>
            <a
              href="/Curriculum.pdf"
              download="Umberto_Carbone_CV.pdf"
              className="px-8 py-3 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-lg font-medium transition-all border border-white/10 hover:border-violet-500/50 shadow-xl flex items-center gap-2"
            >
              Download CV
              <FileUser size={20} className="text-violet-400" />
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <IconsHero />
        </div>
      </div>
    </div>
  );
}

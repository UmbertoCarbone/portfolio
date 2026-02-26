import { FileUser } from "lucide-react";
import { Link } from "react-router-dom";
import IconsHero from "./IconsHero";

export default function HeroContent() {
  return (
    <div className=" relative z-10 w-full min-h-screen pt-32 md:pt-35 pb-10 px-6 md:px-12 lg:pr-16 flex flex-col justify-center lg:items-end items-center overflow-x-hidden  ">
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center text-center gap-6">
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-linear-to-br from-violet-400 to-violet-700 p-1 spin-photo">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src="/image.png"
                alt="profile image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center border-4 border-slate-950">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold text-white opacity-100 leading-tight">
            Junior Full Stack <br />
            <span className="text-violet-500">Developer</span>
          </h1>
          <p className="text-xl sm:text-1xl text-slate-100 opacity-100 max-w-xl mx-auto">
            Trasformo idee in esperienze digitali moderne e performanti
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <Link
            to="/profilo"
            className="relative z-30 px-8 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-all shadow-md hover:scale-105 inline-block"
          >
            Profilo personale
          </Link>
          <a
            href="/Curriculum.pdf"
            download="Umberto_Carbone_CV.pdf"
            className="relative z-30 px-8 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg font-medium transition-all border border-white/20 hover:border-violet-500/50 flex items-center gap-2"
          >
            Download CV
            <FileUser size={20} className="text-violet-400" />
          </a>
        </div>
        <div className="relative z-20">
          <IconsHero />
        </div>
      </div>
    </div>
  );
}

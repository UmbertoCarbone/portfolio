import { FileUser } from "lucide-react";
import { Link } from "react-router-dom";
import IconsHero from "./IconsHero";

// Componente principale HeroContent
export default function HeroContent() {
  return (
    // Contenitore principale con flexbox, padding e responsive design
    <div className="relative z-10 w-full min-h-screen pt-32 md:pt-35 pb-10 px-6 md:px-12 lg:pr-16 flex flex-col justify-center lg:items-end items-center overflow-x-hidden">
      {/* Card centrale con contenuto */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center text-center gap-6">
        {/* Foto profilo con bordo animato */}
        <div className="relative inline-block">
          <div className="relative w-32 h-32">
            {/* Bordo animato */}
            <div className="absolute inset-0 rounded-full p-1 spin-photo"></div>
            {/* Foto ferma */}
            <div className="absolute inset-1 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src="/image.png"
                alt="profile image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Pallino di stato animato */}
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center border-4 border-slate-950">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* Titolo e descrizione */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-100 leading-tight whitespace-nowrap">
            Junior Full Stack <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-violet-500">
              Developer
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-100 opacity-100 max-w-xl mx-auto"></p>
        </div>

        {/* Pulsanti azione */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {/* Link al profilo */}
          <Link
            to="/profilo"
            className="relative z-30 px-8 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-all shadow-md hover:scale-105 inline-block"
          >
            Profilo personale
          </Link>
          {/* Download CV */}
          <a
            href="/Curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-30 px-8 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg font-medium transition-all border border-white/20 hover:border-violet-500/50 flex items-center gap-2"
          >
            Visualizza CV
            <FileUser size={20} className="text-violet-400" />
          </a>
        </div>
        <IconsHero />
      </div>
    </div>
  );
}

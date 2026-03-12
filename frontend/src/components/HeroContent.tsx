import { FileUser } from "lucide-react";
import { Link } from "react-router-dom";
import IconsHero from "./IconsHero";
import "../css/homepage.css";

// Componente principale HeroContent
export default function HeroContent() {
  return (
    <div className="hero-wrapper">
      {/* Card centrale con contenuto */}
      <div className="hero-card">
        {/* Foto profilo con bordo animato */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo-size">
            {/* Bordo animato */}
            <div className="absolute inset-0 rounded-full p-1 spin-photo"></div>
            {/* Foto ferma */}
            <div className="hero-photo-inner">
              <img
                src="/image.png"
                alt="profile image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Pallino di stato animato */}
          <div className="hero-status-dot">
            <div className="hero-status-dot-inner" />
          </div>
        </div>

        {/* Titolo e descrizione */}
        <div className="hero-title-group">
          <h1 className="hero-title">
            Junior Full Stack <br />
            <span className="hero-subtitle">
              Developer
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-100 opacity-100 max-w-xl mx-auto"></p>
        </div>

        {/* Pulsanti azione */}
        <div className="hero-buttons">
          {/* Link al profilo */}
          <Link to="/profilo" className="hero-btn-primary">
            Profilo personale
          </Link>
          {/* Download CV */}
          <a
            href="/Curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary"
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

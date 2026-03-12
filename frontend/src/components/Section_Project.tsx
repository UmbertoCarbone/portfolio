import { useState } from "react";
import VideoModal from "./VideoModal";
import { Globe, Download, Play } from "lucide-react";
import progettiData from "../data/progetti.json";
import "../css/sectionProject.css";

interface Progetto {
  id: number;
  title: string;
  imgUrl: string;
  VideoUrl?: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  download?: string;
}

export default function Section_Project() {
  const progetti: Progetto[] = progettiData;
  const [modalMedia, setModalMedia] = useState<{
    url: string;
    type: "image" | "video";
    alt?: string;
  } | null>(null);

  return (
    <section className="project-section">
      {/* Intestazione Sezione */}
      <div className="project-title-row">
        <h2 className="project-title">
          My <span className="project-title-span">Projects</span>
        </h2>
      </div>

      {/* Grid Progetti */}
      <div className="project-grid">
        {progetti.map((progetto) => (
          <div
            key={progetto.id}
            className="project-card"
          >
            {/* Immagine Progetto */}
            <div className="project-card-img-wrapper">
              {progetto.imgUrl ? (
                <>
                  <img
                    src={progetto.imgUrl}
                    alt={progetto.title}
                    className="project-card-img"
                    onClick={() =>
                      setModalMedia({
                        url: progetto.imgUrl,
                        type: "image",
                        alt: progetto.title,
                      })
                    }
                  />
                  {progetto.VideoUrl && (
                    <button
                      className="project-card-video-overlay"
                      onClick={() =>
                        setModalMedia({
                          url: progetto.VideoUrl!,
                          type: "video",
                        })
                      }
                    >
                      <div className="project-card-play-btn">
                        <Play
                          size={28}
                          className="text-white fill-white ml-1"
                        />
                      </div>
                      <span className="text-white text-sm font-space font-semibold tracking-wide">
                        Guarda video
                      </span>
                    </button>
                  )}
                </>
              ) : progetto.VideoUrl ? (
                <video
                  src={progetto.VideoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/50">
                  Nessuna immagine o video
                </div>
              )}
              <div className="project-card-gradient"></div>
            </div>

            {/* Contenuto Card */}
            <div className="project-card-body">
              <h3 className="project-card-title font-space">
                {progetto.title}
              </h3>

              <p className="project-card-desc">
                {progetto.description}
              </p>

              {/* Tecnologie (Chip stile Alessio Davi) */}
              <div className="project-card-techs">
                {progetto.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="project-card-chip"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer Card: Link */}
              <div className="project-card-footer">
                {progetto.githubUrl ? (
                  <a
                    href={progetto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <i className="devicon-github-original text-2xl"></i>
                    <span className="text-sm font-space">Link Github</span>
                  </a>
                ) : (
                  <span />
                )}

                {progetto.liveDemoUrl ? (
                  <a
                    href={progetto.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <Globe size={22} />
                    <span className="text-sm font-space">Sito web</span>
                  </a>
                ) : (
                  <span />
                )}

                {progetto.download ? (
                  <a
                    href={progetto.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <Download size={22} />
                    <span className="text-sm font-space">Download</span>
                  </a>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modale Media */}
      {modalMedia && (
        <VideoModal
          url={modalMedia.url}
          type={modalMedia.type}
          alt={modalMedia.alt}
          onClose={() => setModalMedia(null)}
        />
      )}
    </section>
  );
}

import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import { Globe, Download, Play } from "lucide-react";

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
  const [progetti, setProgetti] = useState<Progetto[]>([]);
  const [modalMedia, setModalMedia] = useState<{
    url: string;
    type: "image" | "video";
    alt?: string;
  } | null>(null);

  useEffect(() => {
    fetch("/data/progetti.json")
      .then((res) => res.json())
      .then((data: Progetto[]) => setProgetti(data))
      .catch(console.error);
  }, []);

  return (
    <section className="w-full mx-auto max-w-7xl pt-24 px-4 text-space-grotesk">
      {/* Intestazione Sezione */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between">
        <h2 className="text-7xl font-semibold lg:pb-6 pb-24 leading-none tracking-tight text-white/50">
          My <span className="text-gradient-violet">Projects</span>
        </h2>
      </div>

      {/* Grid Progetti */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 md:px-8">
        {progetti.map((progetto) => (
          <div
            key={progetto.id}
            className="relative flex flex-col bg-white/2 border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/80 hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
          >
            {/* Immagine Progetto */}
            <div className="relative h-64 overflow-hidden flex items-center justify-center">
              {progetto.imgUrl ? (
                <>
                  <img
                    src={progetto.imgUrl}
                    alt={progetto.title}
                    className="w-full h-full object-cover cursor-zoom-in"
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
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                      onClick={() =>
                        setModalMedia({
                          url: progetto.VideoUrl!,
                          type: "video",
                        })
                      }
                    >
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm">
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
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Contenuto Card */}
            <div className="p-4 flex flex-col grow">
              <h3 className="text-2xl font-space font-bold text-white mb-3">
                {progetto.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-6 grow">
                {progetto.description}
              </p>

              {/* Tecnologie (Chip stile Alessio Davi) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {progetto.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer Card: Link */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                {progetto.githubUrl ? (
                  <a
                    href={progetto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
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
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
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
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
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

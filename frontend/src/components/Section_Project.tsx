import { useEffect, useState } from "react";

interface Progetto {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  download?: string;
}

const projectFetch = import.meta.env.VITE_API_URL_PROJECTS;

export default function Section_Project() {
  const [progetti, setProgetti] = useState<Progetto[]>([]);


  useEffect(() => {
    fetch(projectFetch)
      .then((res) => res.json())
      .then((data: Progetto[]) => setProgetti(data))
      .catch(console.error);
  }, []);

  return (
    <section className="bg-ink py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Intestazione Sezione */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-semibold leading-none tracking-tight text-white/50 text-space-grotesk">
            My <span className="text-gradient-violet">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-neon to-magenta"></div>
        </div>

        {/* Grid Progetti */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {progetti.map((progetto) => (
            <div 
              key={progetto.id} 
              className="group relative flex flex-col bg-white/2 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Immagine Progetto */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={progetto.imgUrl} 
                  alt={progetto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent"></div>
              </div>

              {/* Contenuto Card */}
              <div className="p-6 flex flex-col grow">
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
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  {progetto.githubUrl && (
                    <a 
                      href={progetto.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors text-xl"
                    >
                      <i className="devicon-github-original"></i>
                    </a>
                  )}
                  
                  {progetto.liveDemoUrl && (
                    <a 
                      href={progetto.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-space font-medium text-neon hover:underline underline-offset-4"
                    >
                      Live Demo →
                    </a>
                  )}

                  {progetto.download && (
                    <a 
                      href={progetto.download} 
                      className="ml-auto text-xs bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-neon transition-colors"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
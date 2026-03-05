import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";

interface Certificazione {
  id: number;
  nome: string;
  ente: string;
  data?: string;
  descrizione?: string;
  imgUrl?: string;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Section_Certifications() {
  const [certificazioni, setCertificazioni] = useState<Certificazione[]>([]);
  const [modalImg, setModalImg] = useState<{ url: string; alt: string } | null>(null);

  useEffect(() => {
    fetch(`${backendUrl}/api/certificazioni`)
      .then((res) => res.json())
      .then((data: Certificazione[]) => setCertificazioni(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="mx-auto max-w-7xl pt-10 text-space-grotesk">
        {/* Titolo sezione */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-semibold leading-none tracking-tight text-white/50">
              My <span className="text-gradient-violet">Certifications</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-neon to-magenta mt-4"></div>
          </div>
        </div>

        {/* Grid card certificazioni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 pb-16">
          {certificazioni.map((cert) => (
            <div
              key={cert.id}
              className="relative flex flex-col bg-white/2 border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              onClick={() =>
                cert.imgUrl
                  ? setModalImg({ url: `${backendUrl}${cert.imgUrl}`, alt: cert.nome })
                  : undefined
              }
            >
              {/* Immagine certificazione */}
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-white/5">
                {cert.imgUrl ? (
                  <img
                    src={`${backendUrl}${cert.imgUrl}`}
                    alt={cert.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                    No image
                  </div>
                )}
                {/* Overlay hover con hint zoom */}
                {cert.imgUrl && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold tracking-wide">View certificate</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent pointer-events-none"></div>
              </div>

              {/* Info certificazione */}
              <div className="flex flex-col gap-2 p-5 flex-1">
                <h3 className="text-white font-semibold text-lg leading-tight">{cert.nome}</h3>
                <span className="text-violet-400 text-sm font-medium">{cert.ente}</span>
                {cert.data && (
                  <span className="text-white/40 text-xs">
                    {new Date(cert.data).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                )}
                {cert.descrizione && (
                  <p className="text-white/50 text-sm mt-1 leading-relaxed">{cert.descrizione}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modale immagine certificazione */}
      {modalImg && (
        <VideoModal
          url={modalImg.url}
          type="image"
          alt={modalImg.alt}
          onClose={() => setModalImg(null)}
        />
      )}
    </>
  );
}

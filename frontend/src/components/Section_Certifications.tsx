import { useState } from "react";
import VideoModal from "./VideoModal";
import certificazioniData from "../data/certificazioni.json";
import "../css/sectionCertifications.css";

interface Certificazione {
  id: number;
  nome: string;
  ente: string;
  data?: string;
  descrizione?: string;
  imgUrl?: string;
}

export default function Section_Certifications() {
  const certificazioni: Certificazione[] = certificazioniData;
  const [modalImg, setModalImg] = useState<{ url: string; alt: string } | null>(
    null,
  );

  return (
    <>
      <section className="cert-section">
        {/* Titolo sezione */}
        <div className="cert-title-row">
          <h2 className="cert-title">
            My{" "}
            <span className="cert-title-span">
              Certifications
            </span>
          </h2>
        </div>

        {/* Grid card certificazioni */}
        <div className="cert-grid">
          {certificazioni.map((cert) => (
            <div
              key={cert.id}
              className="cert-card group"
              onClick={() =>
                cert.imgUrl
                  ? setModalImg({ url: cert.imgUrl, alt: cert.nome })
                  : undefined
              }
            >
              {/* Immagine certificazione */}
              <div className="cert-card-img-wrapper">
                {cert.imgUrl ? (
                  <img
                    src={cert.imgUrl}
                    alt={cert.nome}
                    className="cert-card-img"
                  />
                ) : (
                  <div className="cert-card-no-img">
                    No image
                  </div>
                )}
                {/* Overlay hover con hint zoom */}
                {cert.imgUrl && (
                  <div className="cert-card-img-overlay">
                    <span className="text-white text-sm font-semibold tracking-wide">
                      View certificate
                    </span>
                  </div>
                )}
                <div className="cert-card-img-gradient"></div>
              </div>

              {/* Info certificazione */}
              <div className="cert-card-body">
                <h3 className="cert-card-name">
                  {cert.nome}
                </h3>
                <span className="cert-card-ente">
                  {cert.ente}
                </span>
                {cert.data && (
                  <span className="cert-card-date">
                    {new Date(cert.data).toLocaleDateString("it-IT", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                )}
                {cert.descrizione && (
                  <p className="cert-card-desc">
                    {cert.descrizione}
                  </p>
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

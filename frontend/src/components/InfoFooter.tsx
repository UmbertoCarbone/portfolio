import IconsHero from "./IconsHero";
import "../css/footer.css";

export default function InfoFooter() {
  return (
    <div className="info-footer-wrapper">
      <div className="info-footer-title-row">
        <h2 className="info-footer-title">
          Contact {" "}
          <span className="info-footer-title-span">
            Me
          </span>
        </h2>
      </div>
      <div className="info-footer-body">
        <p className="info-footer-text">
          Grazie per il tuo interesse.<br className="gap-8" />
           Se pensi che il mio profilo possa essere utile alla tua azienda o progetto, sarò felice di approfondire insieme!
        </p>
        <IconsHero />
      </div>
    </div>
  );
}

import "../css/sectionAboutMe.css";

export default function Section_AboutMe() {
  return (
    <section className="about-section">
      {/* Titolo */}
      <div className="about-title-row">
        <h2 className="about-title">
          About{" "}
          <span className="about-title-span">
            Me
          </span>
        </h2>
      </div>

      {/* Contenuto: testo + foto */}
      <div className="about-content-row">
        {/* Testo */}
        <div className="about-text-card">
          <p className="about-text">
            Mi chiamo Umberto,
            <br/>
            <br />
            ho 29 anni e vengo da Napoli.
            <br/>
            <br />
            Ex professionista con 10 anni di esperienza lavorativa, ho scelto di
            reinventarmi seguendo la mia passione per l'informatica.
            <br /> <br/>Ho completato un percorso formativo intensivo sulle
            tecnologie più attuali del settore.
            <br />
            <br/>
            In un anno ho sviluppato competenze full stack e una mentalità
            orientata al risultato.
            <br /><br/> Ora sono pronto a portare quella stessa determinazione in un
            team tech.
          </p>
        </div>

        {/* Foto */}
        <img
          src="/fotoprofilo.PNG"
          alt="Foto profilo"
          className="about-photo"
        />
      </div>
    </section>
  );
}

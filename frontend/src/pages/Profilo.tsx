import Section from "../components/Section";

export default function Profilo() {
  return (
    <div
      className="min-h-screen w-full px-6 pt-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Section
        firstTitle="About"
        secondTitle="Me"
        subTitle="Ciao"
        text={"Sviluppatore italiano con forte passione per programmazione e web design, cresciuto con il web fin da giovane età. Attualmente frequento l’ITIS G. Marconi a Verona e progetto soluzioni eleganti, intuitive e orientate all’esperienza utente, con competenze in HTML, CSS, JavaScript e un occhio per design pulito e moderno."}
      />
      <Section firstTitle="My" secondTitle="Skill" text={"prova testo"} />
      <Section
        firstTitle="My
      "
        secondTitle="Try"
        text={"prova testo"}
      />
      
      <Section firstTitle="My" secondTitle="Take" text={"prova testo"} />
    </div>
  );
}



export default function Section_AboutMe() {
  return (
    <div className="mx-auto max-w-6xl pt-24 pb-24 text-space-grotesk ">
      {/* Wrapper principale centrato, larghezza massima e padding verticale */}

      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between ">
        {/* Layout flessibile: in colonna su mobile, in riga su desktop, con spaziatura */}
        <h2 className="text-5xl md:text-7xl font-semibold leading-none tracking-tight text-white/50">
          {/* Titolo principale grande, semibold, senza spaziatura tra le righe, colore bianco trasparente */}
          About <span className="text-gradient-violet">Me</span>
          {/* Seconda parte del titolo con gradiente personalizzato */}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Griglia con margine superiore, gap tra le colonne, 2 colonne da lg in su */}
        <div className="backdrop-blur-xl text-lg leading-relaxed bg-neutral-900/80 border-2 border-gray-300/10 rounded-xl px-4 py-3 transition-colors duration-300 hover:border-white/60">
          {/* Card con blur, testo grande, line-height rilassato, sfondo scuro trasparente, bordo sottile, angoli arrotondati, padding */}

          <p className="leading-relaxed py-6">
            Sviluppatore italiano con forte passione per programmazione e web
            design, cresciuto con il web fin da giovane età. Attualmente
            frequento l’ITIS G. Marconi a Verona e progetto soluzioni eleganti,
            intuitive e orientate all’esperienza utente, con competenze in HTML,
            CSS, JavaScript e un occhio per design pulito e moderno.
          </p>
          {/* Testo principale della card */}
        </div>
      </div>
    </div>
  );
}

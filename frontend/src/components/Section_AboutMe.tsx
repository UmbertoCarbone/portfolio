export default function Section_AboutMe() {
  const About = (
    <p className="leading-relaxed py-6 text-white/60">
      Sviluppatore italiano con forte passione per programmazione e web design,
      cresciuto con il web fin da giovane età. Attualmente frequento l'ITIS G.
      Marconi a Verona e progetto soluzioni eleganti, intuitive e orientate
      all'esperienza utente, con competenze in HTML, CSS, JavaScript e un occhio
      per design pulito e moderno.
    </p>
  );

  return (
    <section className="mx-auto max-w-7xl pt-16 px-4 text-space-grotesk">
      {/* Titolo */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between">
        <h2
          className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold lg:pb-6 pb-20 leading-none tracking-tight text-white/50"
        >
          About <span className="text-gradient-violet text-5xl sm:text-6xl md:text-6xl lg:text-7xl">Me</span>
        </h2>
      </div>

      {/* Contenuto: testo + foto */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-4">
        {/* Testo */}
        <div className="backdrop-blur-xl text-lg bg-neutral-900/80 border-2 border-gray-300/10 rounded-xl px-4 py-3 transition-colors duration-300 hover:border-white/60 flex-1">
          {About}
        </div>

        {/* Foto */}
        <img
          src="/fotoprofilo.PNG"
          alt="Foto profilo"
          className="w-full max-w-md mx-auto lg:mx-0 rounded-xl  h-80 lg:h-auto lg:w-12 flex-1"
        />
      </div>
    </section>
  );
}

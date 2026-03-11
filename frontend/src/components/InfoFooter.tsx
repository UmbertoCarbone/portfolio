import IconsHero from "./IconsHero";

export default function InfoFooter() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex flex-row items-center justify-center gap-2">
        <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold pb-20 leading-none tracking-tight text-white/50">
          Contact {" "}
          <span className="text-gradient-violet text-5xl sm:text-6xl md:text-6xl lg:text-7xl">
            Me
          </span>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-16">
        <p className="text-white/40 text-lg leading-relaxed text-center max-w-xl">
          Grazie per il tuo interesse.<br className="gap-8" />
           Se pensi che il mio profilo possa essere utile alla tua azienda o progetto, sarò felice di approfondire insieme!
        </p>
        <IconsHero />
      </div>
    </div>
  );
}

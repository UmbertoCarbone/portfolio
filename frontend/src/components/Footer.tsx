import BasicContactForm from "./BasicContactForm";

export default function Footer() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-space-grotesk">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Colonna sinistra – placeholder */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold pb-6 leading-none tracking-normal text-white/50 text-space-grotesk">
            Contatti
            <br />
            <span className="text-gradient-violet">in arrivo</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Qui in futuro troverai i contatti e i link ai social.
            <br />
            Stay tuned!
          </p>
        </div>

        {/* Colonna destra – form */}
        <div className="flex-1 w-full">
          <BasicContactForm />
        </div>
      </div>
    </section>
  );
}
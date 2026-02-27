import type { ReactNode } from "react";

interface SectionProps {
  firstTitle: string;
  secondTitle: string;
  subTitle?: string;
  text?: string;
  children?: ReactNode;
}

export default function Section({
  firstTitle,
  secondTitle,
  text,
  subTitle,
}: SectionProps) {
  return (
    <div className="mx-auto max-w-6xl pt-24 pb-24 text-space-grotesk ">
      {/* Wrapper principale centrato, larghezza massima e padding verticale */}

      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between ">
        {/* Layout flessibile: in colonna su mobile, in riga su desktop, con spaziatura */}
        <h2 className="text-5xl md:text-7xl font-semibold leading-none tracking-tight text-white/50">
          {/* Titolo principale grande, semibold, senza spaziatura tra le righe, colore bianco trasparente */}
          {firstTitle}{" "}
          <span className="text-gradient-violet">{secondTitle}</span>
          {/* Seconda parte del titolo con gradiente personalizzato */}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Griglia con margine superiore, gap tra le colonne, 2 colonne da lg in su */}
        <div className="backdrop-blur-xl text-lg leading-relaxed bg-neutral-900/80 border-2 border-gray-300/10 rounded-xl px-4 py-3 transition-colors duration-300 hover:border-white/60">
          {/* Card con blur, testo grande, line-height rilassato, sfondo scuro trasparente, bordo sottile, angoli arrotondati, padding */}
          {subTitle && (
            <h1 className="pt-2 text-xl font-semibold">{subTitle}</h1>
            // Sottotitolo opzionale, margine inferiore, testo xl, semibold
          )}
          <p className="leading-relaxed py-6">{text}</p>
          {/* Testo principale della card */}
        </div>
      </div>
    </div>
  );
}

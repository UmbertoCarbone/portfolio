export default function Section_Skills() {
  const icons = [
    { class: "devicon-html5-plain", label: "HTML" },
    { class: "devicon-css3-plain", label: "CSS" },
    { class: "devicon-javascript-plain", label: "JS" },
    { class: "devicon-bootstrap-plain", label: "Bootstrap" },
    { class: "devicon-react-original", label: "React" },
    { class: "devicon-express-original", label: "Express" },
    { class: "devicon-python-plain", label: "Python" },
    { class: "devicon-nodejs-plain", label: "Node" },
    { class: "devicon-mysql-plain", label: "MySQL" },
    { class: "devicon-supabase-plain", label: "Supabase" },
    { class: "devicon-vuejs-plain", label: "Vue.js" },
    { class: "devicon-tailwindcss-plain", label: "Tailwind" },
    { class: "devicon-typescript-plain", label: "TS" },
    { class: "devicon-jest-plain", label: "Jest" },
    { class: "devicon-git-plain", label: "GitHub" },
  ];

  const firstRow = icons.slice(0, 8);
  const secondRow = icons.slice(8, 16);

 
  const renderIconGroup = (row: { class: string; label: string }[]) => (
    <div className="flex w-max">
      {[...row, ...row].map((icon, idx) => (
        <div 
          key={idx} 
          className="flex flex-col items-center justify-center shrink-0 text-5xl md:text-6xl
                     w-[25vw] sm:w-[16.66vw] lg:w-[12.5vw]" 
        >
          <i className={`${icon.class} colored`}></i>
          <span className="mt-2 text-sm md:text-lg font-space text-white/70">
            {icon.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative border-y-2 border-white/10 py-16 bg-ink overflow-hidden">
      
      {/* Effetto sfumato ai lati per rendere il tutto più "premium" */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-ink to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-ink to-transparent"></div>

      {/* RIGA 1: Scorrimento a sinistra */}
      <div className="mb-12 flex overflow-hidden">
        <div className="animate-loop-left">
          {renderIconGroup(firstRow)}
        </div>
      </div>

      {/* RIGA 2: Scorrimento a destra */}
      <div className="flex overflow-hidden">
        <div className="animate-loop-right">
          {renderIconGroup(secondRow)}
        </div>
      </div>

    </section>
  );
}
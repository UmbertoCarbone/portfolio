export default function Section_Skills() {
  const icons = [
    { id: 1, class: "devicon-html5-plain", label: "HTML" },
    { id: 2, class: "devicon-css3-plain", label: "CSS" },
    { id: 3, class: "devicon-javascript-plain", label: "JavaScript" },
    { id: 4, class: "devicon-bootstrap-plain", label: "Bootstrap" },
    { id: 5, class: "devicon-express-original", label: "Express" },
    { id: 6, class: "devicon-react-original", label: "React" },
    { id: 7, class: "devicon-python-plain", label: "Python" },
    { id: 8, class: "devicon-nodejs-plain", label: "Node" },
    { id: 9, class: "devicon-mysql-plain", label: "MySQL" },
    { id: 10, class: "devicon-supabase-plain", label: "Supabase" },
    { id: 11, class: "devicon-vuejs-plain", label: "Vue.js" },
    { id: 12, class: "devicon-tailwindcss-plain", label: "Tailwind" },
    { id: 13, class: "devicon-typescript-plain", label: "TypeScript" },
    { id: 14, class: "devicon-jest-plain", label: "Jest" },
    { id: 15, class: "devicon-git-plain", label: "GitHub" },
  ];

  const firstRow = icons.slice(0, 8);
  const secondRow = icons.slice(8, 16);

  const renderIconGroup = (
    row: { id: number; class: string; label: string }[],
  ) => {
    const doubled = [
      ...row.map((icon) => ({ ...icon, _key: `${icon.id}-a` })),
      ...row.map((icon) => ({ ...icon, _key: `${icon.id}-b` })),
    ];
    return (
      <div className="flex w-max">
        {doubled.map((icon) => (
          <div
            key={icon._key}
            className="flex flex-col items-center justify-center shrink-0 text-5xl md:text-6xl w-[25vw] sm:w-[16.66vw] lg:w-[12.5vw]"
          >
            <i className={`${icon.class} colored`}></i>
            <span className="mt-2 text-sm md:text-lg text-space-grotesk text-white/70">
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Titolo centrato */}
      <section className="mx-auto max-w-7xl pt-20 px-4 text-space-grotesk">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold pb-20 leading-none tracking-tight text-white/50 break-words">
            My <span className="text-gradient-violet text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Skills</span>
          </h2>
        </div>
      </section>
      <div className="w-full border-t-2 border-b-2 border-gray-300/10">
        {/* Sezione skills centrata */}
        <section className="text-space-grotesk">
          <div className="relative py-16 overflow-hidden">
            {/* Effetto sfumato ai lati */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-ink to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-ink to-transparent"></div>
            {/* Prima riga di icone */}
            <div className="mb-12 flex overflow-hidden">
              <div className="animate-loop-left">
                {renderIconGroup(firstRow)}
              </div>
            </div>
            <div className="w-full border-t-2  border-gray-300/10 my-14"></div>
            {/* Seconda riga di icone */}
            <div className="flex overflow-hidden">
              <div className="animate-loop-right">
                {renderIconGroup(secondRow)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

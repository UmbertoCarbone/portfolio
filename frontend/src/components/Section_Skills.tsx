export default function Section_Skills() {
  const icons = [
    { class: "devicon-html5-plain", label: "HTML" },
    { class: "devicon-css3-plain", label: "CSS" },
    { class: "devicon-javascript-plain", label: "JavaScript" },
    { class: "devicon-bootstrap-plain", label: "Bootstrap" },
    { class: "devicon-react-original", label: "React" },
    { class: "devicon-express-original", label: "Express" },
    { class: "devicon-python-plain", label: "Python" },
    { class: "devicon-nodejs-plain", label: "Node" },
    { class: "devicon-mysql-plain", label: "MySQL" },
    { class: "devicon-supabase-plain", label: "Supabase" },
    { class: "devicon-vuejs-plain", label: "Vue.js" },
    { class: "devicon-tailwindcss-plain", label: "Tailwind" },
    { class: "devicon-typescript-plain", label: "TypeScript" },
    { class: "devicon-jest-plain", label: "Jest" },
    { class: "devicon-git-plain", label: "GitHub" },
  ];

  const firstRow = icons.slice(0, 8);
  const secondRow = icons.slice(8, 16);

  const renderIconGroup = (row: { class: string; label: string }[]) => (
    <div className="flex w-max">
      {[...row, ...row].map((icon, index) => (
        <div
          key={index}
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

  return (
    <>
      {/* Titolo centrato */}
      <section className="w-full mx-auto max-w-7xl pt-24 px-4 text-space-grotesk">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-7xl font-semibold lg:pb-6 pb-24 leading-none tracking-tight text-white/50">
            My <span className="text-gradient-violet">Skills</span>
          </h2>
        </div>
      </section>
      {/* Linea bianca a tutta larghezza */}
      <div></div>
      <div className="w-full border-t-2 border-b-2 border-gray-300/10 duration-300">
        {/* Sezione skills centrata */}
        <section className="mx-auto  text-space-grotesk">
          <div className="relative py-16  overflow-hidden">
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

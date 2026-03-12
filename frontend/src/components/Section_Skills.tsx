import "../css/sectionSkills.css";

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
          <div key={icon._key} className="skills-icon-item">
            <i className={`${icon.class} colored`}></i>
            <span className="skills-icon-label">{icon.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Titolo */}
      <section className="skills-header">
        <div className="skills-title-row">
          <h2 className="skills-title">
            My <span className="skills-title-span">Skills</span>
          </h2>
        </div>
      </section>

      <div className="skills-band">
        <section className="skills-marquee-section">
          <div className="skills-marquee-wrapper">
            {/* Effetto sfumato ai lati */}
            <div className="skills-fade-left"></div>
            <div className="skills-fade-right"></div>
            {/* Prima riga di icone */}
            <div className="skills-row-first">
              <div className="animate-loop-left">
                {renderIconGroup(firstRow)}
              </div>
            </div>
            <div className="skills-divider"></div>
            {/* Seconda riga di icone */}
            <div className="skills-row-second">
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

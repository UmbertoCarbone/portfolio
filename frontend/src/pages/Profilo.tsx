import Section_AboutMe from "../components/Section_AboutMe";
import Section_Skills from "../components/Section_Skills";
import Section_Project from "../components/Section_Project";
import Section_Certifications from "../components/Section_Certifications";


export default function Profilo() {
  return (
    <div
      className="min-h-screen w-full px-6 pt-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Section_AboutMe/>
      <Section_Skills/>
      <Section_Project/>
      <Section_Certifications/>
    </div>
  );
}

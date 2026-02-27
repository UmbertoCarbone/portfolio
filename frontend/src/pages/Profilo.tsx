import Section_AboutMe from "../components/Section_AboutMe";
import Section_Skills from "../components/Section_Skills";


export default function Profilo() {
  return (
    <div
      className="min-h-screen w-full px-6 pt-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Section_AboutMe/>
      <Section_Skills/>
    </div>
  );
}

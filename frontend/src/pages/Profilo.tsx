import Section_AboutMe from "../components/Section_AboutMe";
import Section_Skills from "../components/Section_Skills";
import Section_Project from "../components/Section_Project";
import Section_Certifications from "../components/Section_Certifications";
import Footer from "../components/Footer";


export default function Profilo() {
  return (
    <div
      className="min-h-screen w-full px-2 pt-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Section_AboutMe/>
      <Section_Skills/>
        <Section_Project/>
        <div className="w-full border-t-2 border-gray-300/20 my-8"></div>
        <Section_Certifications/>
      <div className="w-full border-t-2 border-gray-300/20 "></div>
      <Footer />
    </div>
  );
}

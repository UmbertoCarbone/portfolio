import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Lightning from "../lib/Lightning";
import HeroContent from "../components/HeroContent";
import "../css/homepage.css";

function useXOffset() {
  //spostare il fulmine
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setXOffset(0.6); // Fulmine a destra su desktop
      } else if (width >= 768) {
        setXOffset(0);
      } else {
        setXOffset(-0.2);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return xOffset;
}

export default function Homepage() {
  const xOffset = useXOffset();
  const { isPaused } = useOutletContext<{ isPaused: boolean }>();

  return (
    <div className="homepage-wrapper">
      <div className="homepage-lightning-layer">
        <Lightning
          key={isPaused ? "paused" : "playing"}
          hue={260}
          xOffset={xOffset}
          speed={isPaused ? 0 : 0.7}
          intensity={1}
          size={1}
        />
      </div>
      <HeroContent />
    </div>
  );
}

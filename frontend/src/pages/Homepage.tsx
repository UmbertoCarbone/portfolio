import Lightning from "../components/Lightning";
import PauseFrameButton from "../components/PauseFrameButton";
import HeroContent from "../components/HeroContent";
import { useEffect, useState } from "react";

function useXOffset() {
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
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center">
      {/* 1. BOTTONE PAUSA */}
      <PauseFrameButton isPaused={isPaused} onToggle={() => setIsPaused(!isPaused)} />

      {/* 2. LIGHTNING BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning
          key={isPaused ? "paused" : "playing"}
          hue={260}
          xOffset={xOffset}
          speed={isPaused ? 0 : 0.8}
          intensity={1}
          size={1}
        />
      </div>

      {/* 3. CONTENUTO HERO */}
      <HeroContent />
    </div>
  );
}
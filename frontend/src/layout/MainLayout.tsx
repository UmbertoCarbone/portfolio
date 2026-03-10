import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PauseFrameButton from "../components/PauseFrameButton";

export default function MainLayout() {
  const [isPaused, setIsPaused] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/profilo", label: "Profilo" },
    /* { to: "/progetti", label: "Progetti" },
    { to: "/Certificazioni", label: "Certificazioni" }, */
  ];

  const navLinkClass =
    "relative text-base md:text-xl text-slate-300 hover:text-white transition-colors py-1 " +
    "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 " +
    "after:w-0 after:h-0.5 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
      >
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-3 md:px-6 py-2 md:py-3 rounded-2xl flex items-center justify-between">
          {/* Emoji a sinistra */}
          <span></span>

          {/* Link al centro */}
          <div className="flex gap-3 md:gap-6">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={navLinkClass}>
                {label}
              </Link>
            ))}
          </div>

          {/* Bottone pausa a destra */}
          <PauseFrameButton
            isPaused={isPaused}
            onToggle={() => setIsPaused((prev) => !prev)}
          />
        </div>
      </motion.nav>

      <Outlet context={{ isPaused }} />
    </>
  );
}

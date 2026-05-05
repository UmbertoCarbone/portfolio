import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PauseFrameButton from "../components/PauseFrameButton";
import "../css/mainLayout.css";

export default function MainLayout() {
  const [isPaused, setIsPaused] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/profilo", label: "Profilo" },
    /* { to: "/progetti", label: "Progetti" },
    { to: "/Certificazioni", label: "Certificazioni" }, */
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        className="navbar-container"
      >
        <div className="navbar-inner">
          {/* Emoji a sinistra */}
          <span></span>

          {/* Link al centro */}
          <div className="navbar-links">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link">
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

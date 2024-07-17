import { React, useState, useEffect } from "react"
import { motion } from "framer-motion"
import "animate.css"
import "./splash.css"
import { logoPath, tagPath } from "./assets/SVGPaths"

const logoVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeIn",
      fill: {
        duration: 2,
        ease: "easeIn",
        delay: 2,
      }
    },
    fill: "rgba(255, 255, 255, 1)",
    strokeWidth: 0,
  },
};

// ^^ "Arctex" Logo Fill Colors:
// Arctex blue: rgba(28, 208, 255, 1)
// White: rgba(255, 255, 255, 1)

const tagVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

function SplashPage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 5000); //times the start of the fadeout animation
  }, []);

  return (

    <div
      style={{ backgroundColor: 'black', }}
      className={hasLoaded ? "custom-fade-out" : ""}>
      <div className="loader-container">
        
        <motion.svg // Logo SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 297"
          // Changed from 0 0 210 297 to for scalability to phone displays
          height="50%"
          width="100%"
          initial="hidden"
          animate="visible"
          style={{ marginRight: "3.5%" }}
        >
          <motion.path
            d={logoPath}
            fill="white"
            stroke="white"
            strokeWidth="3"
            variants={logoVariants}
          />
        </motion.svg> {/* Logo SVG end */}

        <motion.svg // Tagline SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 297"
          // Changed from 0 0 210 297 to for scalability to phone displays
          height="50%"
          width="100%"
          initial="hidden"
          animate="visible"
          style={{ marginTop: "-22%", marginRight: "1.5%" }}
        >
          <motion.path
            d={tagPath}
            fill="white"
            stroke="white"
            strokeWidth="1.25"
            variants={tagVariants}
          />
        </motion.svg> {/* Tag SVG end */}
      </div>
    </div>
  )
}

export default SplashPage;
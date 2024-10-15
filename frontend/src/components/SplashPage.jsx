import { React, useState, useEffect } from "react"
import { motion } from "framer-motion"
import "../splash.css"
import { logoPath, tagPath } from "../assets/SVGPaths.js"

const logoVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 2,
    transition: {
      duration: 3,
      ease: "easeIn",
      fill: {
        duration: 1.5,
        ease: "easeIn",
        delay: 1,
      }
    },
    fill: "rgba(255, 255, 255, 1)",
    strokeWidth: 0,
  },
};

const tagVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .5,
      duration: 1.5,
      ease: "easeIn",
    },
  },
};

function SplashPage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 3000);
  }, []); 

  return (
    <div className={`splash-container ${hasLoaded ? "custom-fade-out" : ""}`}>
      <div className="loader-container">
        
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 297"
          height="50%"
          width="100%"
          initial="hidden"
          animate="visible"
          className="absolute left-1/2 -mt-12 transform -translate-x-1/2" // Adjust margins based on screen size
        >
          <motion.path
            d={logoPath}
            fill="white"
            stroke="white"
            strokeWidth="3"
            variants={logoVariants}
          />
        </motion.svg>

        <motion.svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 297"
          height="50%"
          width="100%"
          initial="hidden"
          animate="visible"
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-center" // Center the tagline
        >
          <motion.path
            d={tagPath}
            fill="white"
            variants={tagVariants}
          />
        </motion.svg> 
      </div>
    </div>
  )
}

export default SplashPage;

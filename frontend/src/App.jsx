import { useRef, useState, useEffect } from 'react';
import { Canvas, extend } from "@react-three/fiber";
import { Link } from 'react-router-dom';
import './App.css';
import { FXAAShader } from 'three-stdlib';
import TextBoxContent from './components/TextboxContent.jsx';
import SplashPage from './components/SplashPage.jsx';
import NavBar from './components/NavBar.jsx';
import Scene from './components/Scene.jsx';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

function App() {
  const [hoveredObject, setHoveredObject] = useState(null);
  const [clickedObject, setClickedObject] = useState(null);
  const [showSplash, setShowSplash] = useState(!sessionStorage.getItem('splashShown'));
  const [startFade, setStartFade] = useState(true);
  const mobileTextBoxRef = useRef(null);
  const desktopTextBoxRef = useRef(null);

  const handlePointerOver = (object) => {
    setHoveredObject(object);
  };

  const handlePointerOut = () => {
    setHoveredObject(null);
  };

  const handleClick = (objectId) => {
    if (['gear', 'briefcase', 'collegeAppAssist', 'shoppingBag'].includes(objectId)) {
      setClickedObject(clickedObject === objectId ? null : objectId);

      if (mobileTextBoxRef.current) {
        mobileTextBoxRef.current.scrollTop = 0;
      }
      if (desktopTextBoxRef.current) {
        desktopTextBoxRef.current.scrollTop = 0;
      }
    }
  };

 // Function to handle NavLink clicks
 const handleNavLinkClick = (object) => {
  setClickedObject(object);
};

  const { scene: collegeAppAssist } = useGLTF('./collegeAppAssist.glb');
  const { scene: gear } = useGLTF('./gear.glb');
  const { scene: podium } = useGLTF('./podium.glb');
  const { scene: shoppingBag } = useGLTF('./shoppingBag.glb');
  const { scene: briefcase } = useGLTF('./briefcase.glb');
  const { scene: island } = useGLTF('./island.glb');

  // Traverse the GLTF scene and set castShadow and receiveShadow
  // used for 3d models with multiple parts?
  useEffect(() => {
    collegeAppAssist.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    gear.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    briefcase.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    shoppingBag.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    podium.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    island.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true;
      }
    });
  }, [collegeAppAssist, gear, briefcase, shoppingBag, podium, island]);

  useEffect(() => {
    if (showSplash) {
      const splashTimer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('splashShown', 'true');
      }, 5000); // Controls how long the splash page persists (Set to 5000)

      const bgColorTimer = setTimeout(() => {
        setStartFade(false);
        // sessionStorage.setItem('homeFadeShown', 'true'); 
      }, 3000); // Controls when the HOME PAGE FADE IN starts (Set to 3000)

      return () => {
        clearTimeout(splashTimer);
        clearTimeout(bgColorTimer);
      }
    }
  }, [showSplash]);
  // replace the above 2 lines with the bottom 4 lines to remove homepage fade in on page change, also activate sessionStorage.setItem('homeFadeShown', 'true'); above
  //   } else {
  //     setStartFade(!sessionStorage.getItem('homeFadeShown'));
  //   }
  // }, [showSplash]);

  return (
    <div className='h-full overflow-hidden'>
      {showSplash && <SplashPage />}
      <div className={`home-container overflow-hidden h-full ${startFade ? "hidden custom-fade-in" : ""}`}>
        <NavBar onNavLinkClick={handleNavLinkClick}/>
        <Canvas className="bg-gradient-to-b from-cyan-300 to-sky-400 item1 overflow-hidden" shadows>
          <Scene
            collegeAppAssist={collegeAppAssist}
            gear={gear}
            podium={podium}
            shoppingBag={shoppingBag}
            briefcase={briefcase}
            island={island}

            hoveredObject={hoveredObject}
            clickedObject={clickedObject}
            handlePointerOver={handlePointerOver}
            handlePointerOut={handlePointerOut}
            handleClick={handleClick}
          />
        </Canvas>
        {/* Side-box on desktop */}
        <div ref={desktopTextBoxRef} className="desktop-sidebox hide-scrollbar hidden lg:block absolute top-0 right-0 h-full w-1/3 overflow-scroll bg-white rounded-lg">
          <TextBoxContent clickedObjectId={clickedObject} />
        </div>
        {/* Bottom textbox on mobile */}
        <div ref={mobileTextBoxRef} className="hide-scrollbar lg:hidden absolute bottom-0 inset-x-0 bg-white h-1/4 overflow-scroll rounded-t-lg">
          <TextBoxContent clickedObjectId={clickedObject} />
        </div>
      </div>
    </div>
  );
}

export default App;

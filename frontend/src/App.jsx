import { useRef, useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Link } from 'react-router-dom';
import './App.css';
import { PerspectiveCamera, MapControls, Outlines, useGLTF } from '@react-three/drei';
import TextBoxContent from './components/TextboxContent.jsx';
import SplashPage from './components/SplashPage.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  const [hoveredObject, setHoveredObject] = useState(null);
  const [clickedObject, setClickedObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handlePointerOver = (object) => {
    setHoveredObject(object);
  };

  const handlePointerOut = () => {
    setHoveredObject(null);
  };

  const handleClick = (object) => {
    setClickedObject(clickedObject === object ? null : object);
  };

  const { scene: wizardHats } = useGLTF('./wizard_hats/scene.gltf');

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
    }, 7500); // Controls how long the splash page persists (Set to 7500)

    const bgColorTimer = setTimeout(() => {
      document.body.style.backgroundColor = "lightblue";
    }, 7505); // Script in index.html renders the background black for the fade to black. This sets it to light blue to remove dead space around canvas

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(bgColorTimer);
    };
  }, []);

  return (
    <div className='container overflow-hidden'>
      {isLoading ? (
        <SplashPage />
      ) : (
        <div className={`overflow-hidden h-full ${isLoading ? "" : "custom-fade-in"}`}>
          <NavBar />
          <Canvas className="item1 overflow-hidden" shadows>
            <ambientLight intensity={0.8} color="#ffffff" />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={0.1}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.6} />
            <PerspectiveCamera makeDefault fov={75} position={[0, 5, 5]} rotation={[-1, 0, 0]} />

            <mesh
              rotation={[0, 1, 0]}
              onPointerOver={() => handlePointerOver('box1')}
              onPointerOut={handlePointerOut}
              onClick={() => handleClick('box1')}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color='orange' />
              {(hoveredObject === 'box1' || clickedObject === 'box1') && <Outlines color="white" thickness={0.1} />}
            </mesh>

            <mesh
              rotation={[0, 0, 0]}
              position={[0, -2, 0]}
              onPointerOver={() => handlePointerOver('box2')}
              onPointerOut={handlePointerOut}
              onClick={() => handleClick('box2')}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[10, 1, 10]} />
              <meshStandardMaterial color='green' />
              {(hoveredObject === 'box2' || clickedObject === 'box2') && <Outlines color="white" thickness={0.1} />}
            </mesh>

            <primitive object={wizardHats} scale={1.0} position={[0, -1, 5]}/>
            <MapControls />
          </Canvas>

          <div className="desktop-sidebox hide-scrollbar hidden lg:block absolute top-0 right-0 h-full w-1/3 overflow-scroll bg-white rounded-lg">
            <TextBoxContent />
          </div>

          <div className="hide-scrollbar lg:hidden absolute bottom-0 inset-x-0 bg-white h-1/4 overflow-scroll rounded-t-lg">
            <TextBoxContent />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

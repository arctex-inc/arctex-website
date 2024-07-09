import { useRef, useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import './App.css';
import { PerspectiveCamera, MapControls, useGLTF } from '@react-three/drei';
import SplashPage from './components/SplashPage.jsx';
import NavBar from './components/NavBar.jsx';
import Box from './components/Box.jsx';
import Landscape from './components/Landscape.jsx';
import TextBoxContent from './components/TextBoxContent.jsx';
import TextBubble from './components/TextBubble.jsx';

function App() {
  const [hoveredObject, setHoveredObject] = useState(null);
  const [clickedObject, setClickedObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const mobileTextBoxRef = useRef(null);
  const desktopTextBoxRef = useRef(null);

  const handlePointerOver = (object) => {
    setHoveredObject(object);
  };

  const handlePointerOut = () => {
    setHoveredObject(null);
  };

  const handleClick = (objectId) => {
    if (['box1', 'box2', 'box3'].includes(objectId)) {
      setClickedObject(clickedObject === objectId ? null : objectId);

      if (mobileTextBoxRef.current) {
        mobileTextBoxRef.current.scrollTop = 0;
      }
      if (desktopTextBoxRef.current) {
        desktopTextBoxRef.current.scrollTop = 0;
      }
    }
  };

  const { scene: wizardHats } = useGLTF('./wizard_hats/scene.gltf');

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const bgColorTimer = setTimeout(() => {
      document.body.style.backgroundColor = "lightblue";
    }, 7505);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(bgColorTimer);
    };
  }, []);

  const boxPositions = [
    [0, 0, 0],
    [3, 0, 2.5],
    [-3, 0, 2.5]
  ];

  const textBubblePositions = boxPositions.map(pos => [pos[0] - .25, pos[1] + 0.75, pos[2]]);

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

            {['box1', 'box2', 'box3'].map((boxId, index) => (
              <Box
                key={boxId}
                position={boxPositions[index]}
                rotation={[0, 1, 0]}
                color='orange'
                objectId={boxId}
                handlePointerOver={handlePointerOver}
                handlePointerOut={handlePointerOut}
                handleClick={handleClick}
                hoveredObject={hoveredObject}
                clickedObject={clickedObject}
              />
            ))}

            <Landscape
              rotation={[0, 0, 0]}
              position={[0, -2, 0]}
              handlePointerOver={handlePointerOver}
              handlePointerOut={handlePointerOut}
              handleClick={handleClick}
              hoveredObject={hoveredObject}
              clickedObject={clickedObject}
            />

            {textBubblePositions.map((position, index) => (
              <TextBubble key={index} position={position} text={`Box ${index + 1}`} />
            ))}

            <primitive object={wizardHats} scale={1.0} position={[0, -1, 5]} />
            <MapControls />
          </Canvas>

          <div ref={desktopTextBoxRef} className="desktop-sidebox hide-scrollbar hidden lg:block absolute top-0 right-0 h-full w-1/3 overflow-scroll bg-white rounded-lg">
            <TextBoxContent clickedObjectId={clickedObject} />
          </div>
          <div ref={mobileTextBoxRef} className="hide-scrollbar lg:hidden absolute bottom-0 inset-x-0 bg-white h-1/4 overflow-scroll rounded-t-lg">
            <TextBoxContent clickedObjectId={clickedObject} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
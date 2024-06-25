import { useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'
import { PerspectiveCamera, MapControls } from '@react-three/drei'
import SplashPage from './SplashPage'

function App() {
  const [hovered, hover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7500); // Controls how long the splash page persists

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
      {isLoading ? (
        <SplashPage />) : (
        <>
          <Canvas className={`item1 ${isLoading ? "" : "custom-fade-in"}`}>
            <ambientLight intensity={2} />
            {/* not sure what the default is for ambient light but you need an ambient light */}
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <PerspectiveCamera makeDefault fov={75} position={[0, 5, 5]} rotation={[-1, 0, 0]}>
            </PerspectiveCamera>

            {/* <camera angle={15} /> */}
            {/* three js uses radians for rotation */}
            <mesh rotation={[0, 1, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
            <mesh rotation={[0, 0, 0]} position={[0, -2, 0]}>
              <boxGeometry args={[10, 1, 10]} />
              <meshStandardMaterial color={hovered ? 'hotpink' : 'green'} />
            </mesh>
            <MapControls />
          </Canvas>
          {/* <section className='item2'>
        <h1>blah blah blah</h1>
        <p>blah blah</p>
      </section> */}
        </>
      )}
    </div>
  )
}

export default App;
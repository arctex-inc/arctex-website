import { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { Link } from 'react-router-dom';
import './App.css'
import { PerspectiveCamera, MapControls } from '@react-three/drei'
import TextBoxContent from './components/TextboxContent.jsx';

function App() {
  const [hovered, hover] = useState(false)

  return (
    <div className="overflow-hidden h-full">
      {/* can't put any non three.js code within the canvas or it'll break */}
      <Canvas className="item1 overflow-hidden">
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
      {/* <div className='' >
        <Link to="/shopping">
          <button className="shopping-button">Go to Shopping Page</button>
        </Link>
      </div> */}

      {/* Side-box on desktop*/}
      <div className="hidden md:block absolute top-0 right-0 h-full w-1/3 overflow-y-auto bg-white m-5 rounded-lg overscroll-contain">
        <TextBoxContent />
        {/* Bottom textbox on mobile */}
      </div>
      <div className="md:hidden absolute inset-x-0 bottom-0 bg-white h-1/4 overflow-y-auto rounded-t-lg overscroll-contain">
        <TextBoxContent />
      </div>
    </div>
  )
}

export default App

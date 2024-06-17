import { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'
import { PerspectiveCamera, MapControls } from '@react-three/drei'

function App() {
  const [hovered, hover] = useState(false)

  return (
    // <div className='container'>
    <>
      <Canvas className='item1'>
        <ambientLight intensity={2} /> 
        {/* not sure what the default is for ambient light but you need an ambient light */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <PerspectiveCamera makeDefault fov={75} position={[0, 5, 5]} rotation={[-1, 0, 0]}>
        </PerspectiveCamera>

        {/* <camera angle={15} /> */}
        {/* three js uses radians for rotation */}
        <mesh rotation={[0, 1, 0]}>
          <boxGeometry args={[1, 1, 1]}/>
          <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
        <mesh rotation={[0, 0, 0]} position={[0,-2,0]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : 'green'} />
        </mesh>
        <MapControls />
      </Canvas>
      {/* Side-box*/}
      <div className="hidden md:block absolute top-0 right-0 h-full w-1/4 bg-white">
        <h4 className="text-center font-bold">
          Side Box
        </h4>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="md:hidden absolute bottom-0 inset-x-0 bg-white h-1/4">
        <h4 className="text-center font-bold">
          Side Box Mobile
        </h4>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  )
}

export default App

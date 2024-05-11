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
      <section className='item2'>
        <h1>blah blah blah</h1>
        <p>blah blah</p>
      </section>
    </>
    // </div>
  )
}

export default App

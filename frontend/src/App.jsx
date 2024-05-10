import { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'
import { PerspectiveCamera } from '@react-three/drei'

function App() {
  const [hovered, hover] = useState(false)

  return (
    // <div className='container'>
    <>
      <Canvas className='item1'>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <PerspectiveCamera angle={30}>
        </PerspectiveCamera>

        {/* <camera angle={15} /> */}
        {/* three js uses radians for rotation */}
        <mesh rotation={[1, 0, 0]}>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>

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

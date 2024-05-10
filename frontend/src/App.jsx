import { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'

function App() {
  const [hovered, hover] = useState(false)

  return (
    <Canvas>
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      
      {/* <camera angle={15} /> */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
      </mesh>

    </Canvas>
  )
}

export default App

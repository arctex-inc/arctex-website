import { Canvas } from "@react-three/fiber"
import './App.css'

function App() {

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="blue"/>
      </mesh>

    </Canvas>
  )
}

export default App

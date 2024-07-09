// Landscape.jsx
import { Outlines } from '@react-three/drei';

function Landscape({ position, rotation, handlePointerOver, handlePointerOut, handleClick, hoveredObject, clickedObject }) {

  return (
    
    <mesh
      rotation={rotation}
      position={position}
      onPointerOver={() => handlePointerOver('landscape')}
      onPointerOut={handlePointerOut}
      onClick={() => handleClick('landscape')}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color="green" />
      {(hoveredObject === 'landscape' || clickedObject === 'landscape') && <Outlines color="white" thickness={0.1} />}
    </mesh>
  );
};

export default Landscape;

import { useRef } from 'react';
import { Outlines } from '@react-three/drei';

function Box({ position, rotation, color, objectId, handlePointerOver, handlePointerOut, handleClick, hoveredObject, clickedObject }) {

  return (

    <mesh
      position={position}
      rotation={rotation}
      onPointerOver={() => handlePointerOver(objectId)}
      onPointerOut={handlePointerOut}
      onClick={() => handleClick(objectId)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
      {(hoveredObject === objectId || clickedObject === objectId) && <Outlines color="white" thickness={0.1} />}
    </mesh>
  );
};

export default Box;

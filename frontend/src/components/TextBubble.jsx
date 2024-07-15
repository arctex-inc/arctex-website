// SpeechBubble.jsx
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';
import { Text } from '@react-three/drei';

const createSpeechBubbleShape = () => {
  const shape = new Shape();
  
  // Left side
  shape.moveTo(-0.8, 0.4); // Top-left corner
  shape.quadraticCurveTo(-1, 0.4, -1, 0.2); // Top-left rounded corner
  shape.lineTo(-1, -0.2); // Left side
  shape.quadraticCurveTo(-1, -0.4, -0.8, -0.4); // Bottom-left rounded corner
  shape.lineTo(-0.2, -0.4); // Bottom-left side
  
  // Shortened tal
  shape.lineTo(0, -0.8); // Tail point
  shape.lineTo(0.2, -0.4); // Bottom-right side
  
  // Right side
  shape.lineTo(0.8, -0.4); // Bottom side
  shape.quadraticCurveTo(1, -0.4, 1, -0.2); // Bottom-right rounded corner
  shape.lineTo(1, 0.2); // Right side
  shape.quadraticCurveTo(1, 0.4, 0.8, 0.4); // Top-right rounded corner
  shape.lineTo(-0.8, 0.4); // Top side

  return shape;
};





const bubbleShape = createSpeechBubbleShape();
const extrudeSettings = { depth: 0.2, bevelEnabled: false };

function TextBubble({ position, text }) {
  const groupRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main bubble */}
      <mesh position={[.25, .75, 0]}>
        <extrudeGeometry args={[bubbleShape, extrudeSettings]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {/* Text */}
      <Text
        position={[.25, 0.75, 0.22]}
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

export default TextBubble;
// SpeechBubble.jsx
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';
import { Text } from '@react-three/drei';

const createSpeechBubbleShape = () => {
  const shape = new Shape();
  shape.moveTo(-1.5, 0.75); // Start point
  shape.quadraticCurveTo(0, 1.5, 1.5, 0.75); // Top curve
  shape.quadraticCurveTo(1.75, 0.5, 1.5, 0.25); // Top-right curve
  shape.lineTo(0.25, 0.125); // *** where bottom right bubble meets tail
  shape.lineTo(0.25, -0.25); // Adjusted bottom-right corner (shorter)
  shape.lineTo(-0.25, 0.125); // *** where bottom left bubble meets tail
  shape.lineTo(-1.5, 0.25); // Bottom-left corner
  shape.quadraticCurveTo(-1.75, 0.5, -1.5, 0.75); // Top-left curve
  return shape;
};

const bubbleShape = createSpeechBubbleShape();
const extrudeSettings = { depth: 0.2, bevelEnabled: false };

const SpeechBubble = ({ position, text }) => {
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
      <mesh position={[0, 0, 0]}>
        <extrudeGeometry args={[bubbleShape, extrudeSettings]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {/* Text */}
      <Text
        position={[0, 0.6, 0.22]}
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

export default SpeechBubble;
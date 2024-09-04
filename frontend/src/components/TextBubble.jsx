import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { Box3, Vector3, ExtrudeGeometry, Mesh } from 'three';
import text_bubble from "../assets/text_bubble.svg";

function TextBubble({ position, text }) {
  const groupRef = useRef();
  const { camera } = useThree();
  const [bubbleGeometry, setBubbleGeometry] = useState(null);

  useEffect(() => {
    // Load the SVG and create the shape
    const loader = new SVGLoader();
    loader.load(
      text_bubble,
      (data) => {
        const paths = data.paths;
        if (paths.length === 0) {
          console.error("No paths found in the SVG file.");
          return;
        }
        const shapes = paths.flatMap((path) => path.toShapes(true));
        if (shapes.length === 0) {
          console.error("No shapes created from the SVG paths.");
          return;
        }

        // Create an extrude geometry from the shape
        const shape = shapes[0];
        const extrudeSettings = { depth: 0.2, bevelEnabled: false };
        const geometry = new ExtrudeGeometry(shape, extrudeSettings);

        // Calculate the bounding box and center the geometry
        const boundingBox = new Box3().setFromObject(new Mesh(geometry));
        const center = new Vector3();
        boundingBox.getCenter(center);
        geometry.translate(-center.x, -center.y, -center.z);

        setBubbleGeometry(geometry);
      },
      undefined,
      (error) => {
        console.error("Error loading SVG:", error);
      }
    );
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position);
    }
  });

  if (!bubbleGeometry) {
    return null; // Return null or a loading indicator while the geometry is loading
  }

  return (
    <group ref={groupRef} position={position}>
      {/* Main bubble */}
      <mesh position={[0, 0, 0]} scale={0.015} geometry={bubbleGeometry}>
        <meshBasicMaterial color="white" />
      </mesh>
      {/* Text */}
      <Text
        position={[0, .125, 0.22]}
        fontSize={0.2}
        fontWeight="bold"
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

export default TextBubble;
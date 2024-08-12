import React, { useRef, useEffect } from 'react';
import { extend, useThree } from "@react-three/fiber";
import { PerspectiveCamera, MapControls, Outlines } from '@react-three/drei';
import { EffectComposer, RenderPass, OutlinePass, ShaderPass } from 'three-stdlib';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader';
import * as THREE from 'three';
import TextBubble from './TextBubble.jsx';

extend({ EffectComposer, RenderPass, OutlinePass, ShaderPass });

const Scene = ({ wizardHats, hoveredObject, clickedObject, handlePointerOver, handlePointerOut, handleClick }) => {
  const { scene, camera, gl } = useThree();
  const composer = useRef();
  const outlinePassRef = useRef();

  useEffect(() => {
    const composerInstance = new EffectComposer(gl);
    composer.current = composerInstance;

    const renderPass = new RenderPass(scene, camera);
    composerInstance.addPass(renderPass);

    const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    outlinePassRef.current = outlinePass;
    composerInstance.addPass(outlinePass);

    // Add the gamma correction pass to fix color issues
    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    composerInstance.addPass(gammaCorrectionPass);

    outlinePass.edgeStrength = 3;
    outlinePass.edgeGlow = 0.5;
    outlinePass.edgeThickness = 1;
    outlinePass.pulsePeriod = 1;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#000000');

    const render = () => {
      composerInstance.render();
    };

    gl.setAnimationLoop(render);

    return () => {
      gl.setAnimationLoop(null);
    };
  }, [scene, camera, gl, wizardHats]);

  useEffect(() => {
    if (outlinePassRef.current) {
      const selectedObjects = [];
      if (hoveredObject === 'wizardHats') {
        selectedObjects.push(wizardHats);
      }
      outlinePassRef.current.selectedObjects = selectedObjects;
    }
  }, [hoveredObject, wizardHats]);

  const boxPositions = [
    [0, 0, 0],
    [3, 0, 2.5],
    [-3, 0, 2.5]
  ];

  const textBubblePositions = boxPositions.map(pos => [pos[0], pos[1] + 1, pos[2]]);

  return (
    <>
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.6} />
      <PerspectiveCamera makeDefault fov={75} position={[0, 5, 5]} rotation={[-1, 0, 0]} />

      {/* "Building 1" with conditional white outline */}
      <mesh
        position={boxPositions[0]}
        rotation={[0, 1, 0]}
        onPointerOver={() => handlePointerOver('box1')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('box1')}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
        {(hoveredObject === 'box1' || clickedObject === 'box1') && <Outlines color="white" thickness={0.1} />}
      </mesh>

      {/* "Building 2" with conditional white outline */}
      <mesh
        position={boxPositions[1]}
        rotation={[0, 1, 0]}
        onPointerOver={() => handlePointerOver('box2')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('box2')}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
        {(hoveredObject === 'box2' || clickedObject === 'box2') && <Outlines color="white" thickness={0.1} />}
      </mesh>

      {/* "Building 3" with conditional white outline */}
      <mesh
        position={boxPositions[2]}
        rotation={[0, 1, 0]}
        onPointerOver={() => handlePointerOver('box3')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('box3')}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
        {(hoveredObject === 'box3' || clickedObject === 'box3') && <Outlines color="white" thickness={0.1} />}
      </mesh>

      {/* Landscape with conditional white outline */}
      <mesh
        rotation={[0, 0, 0]}
        position={[0, -2, 0]}
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

      {textBubblePositions.map((position, index) => (
        <TextBubble key={index} position={position} text={`Box ${index + 1}`} />
      ))}

      <primitive
        object={wizardHats}
        scale={1.0}
        position={[0, -1, 5]}
        onPointerOver={() => handlePointerOver('wizardHats')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('wizardHats')}
      />

      <MapControls
        minDistance={2}
        maxDistance={8}
        minAzimuthAngle={0}
        maxAzimuthAngle={0}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
      />
    </>
  );
};

export default Scene;
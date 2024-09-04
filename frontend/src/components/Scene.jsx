import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, MapControls, Outlines, Float } from '@react-three/drei';
import { EffectComposer, RenderPass, OutlinePass, ShaderPass } from 'three-stdlib';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader';
import * as THREE from 'three';
import TextBubble from './TextBubble.jsx';

extend({ EffectComposer, RenderPass, OutlinePass, ShaderPass });

const Scene = ({ wizardHats, collegeAppAssist, gear,
  podium,
  shoppingBag,
  briefcase,
  island,
  hoveredObject, clickedObject, handlePointerOver, handlePointerOut, handleClick }) => {
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
    outlinePass.edgeGlow = 1;
    outlinePass.edgeThickness = 1.5;
    outlinePass.pulsePeriod = 3;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#000000');

    const render = () => {
      composerInstance.render();
    };

    gl.setAnimationLoop(render);

    return () => {
      gl.setAnimationLoop(null);
    };
  }, [scene, camera, gl, collegeAppAssist, gear, briefcase, shoppingBag]);

  useFrame(() => {

    const selectedObjects = [];
    if (hoveredObject !== 'collegeAppAssist') {
      selectedObjects.push(collegeAppAssist);
    }
    if (hoveredObject !== 'gear') {
      selectedObjects.push(gear);
    }
    if (hoveredObject !== 'briefcase') {
      selectedObjects.push(briefcase);
    }
    if (hoveredObject !== 'shoppingBag') {
      selectedObjects.push(shoppingBag);
    }
    outlinePassRef.current.selectedObjects = selectedObjects;

  }, [hoveredObject, collegeAppAssist, gear, briefcase, shoppingBag]);

  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight
        position={[10, 12, 5]}
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
      <hemisphereLight intensity={0.6} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 20, 20]} rotation={[-1, 0, 0]} />


      {/* "Building 1" with conditional white outline */}
      {/* <mesh
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
        {(hoveredObject === 'box1' || clickedObject === 'box1') && <Outlines color="white" thickness={1} />}
      </mesh> */}

      <primitive
        object={collegeAppAssist}
        scale={3.0}
        position={[-2.9, 2.2, -1.8]} // x position changed by -4
        onPointerOver={() => handlePointerOver('collegeAppAssist')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('collegeAppAssist')}
      />
      <TextBubble position={[-2.9, 3.5, -1.8]} text={"CollegeAppAssist"} />

      <primitive
        object={gear}
        scale={1.0}
        position={[-9, 2, 2.4]} // x position changed by -4
        onPointerOver={() => handlePointerOver('gear')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('gear')}
      />
      <TextBubble position={[-9, 3.7, 2.4]} text={"Services"} />

      <primitive
        object={briefcase}
        scale={1.2}
        position={[-7, 1.4, -2]} // x position changed by -4
        onPointerOver={() => handlePointerOver('briefcase')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('briefcase')}
      />
      <TextBubble position={[-7, 2.7, -2]} text={"Careers"} />

      <primitive
        object={shoppingBag}
        scale={1.5}
        position={[0, 1.5, 2]} // x position changed by -4
        onPointerOver={() => handlePointerOver('shoppingBag')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('shoppingBag')}
        receiveShadow
        castShadow
      />
      <TextBubble position={[0, 3.5, 2]} text={"Products"} />

      <primitive
        object={island}
        scale={0.25}
        position={[-4, -1, 0]} // x position changed by -4
        rotation={[0, 100, 0]}
        receiveShadow
        castShadow
      />

      {/* podiums */}
      <primitive
        object={podium.clone()}
        scale={1.0}
        position={[-9, -.30, 2]} // x position changed by -4
      />
      <primitive
        object={podium.clone()}
        scale={1.0}
        position={[-7, -.30, -2]} // x position changed by -4
      />
      <primitive
        object={podium.clone()}
        scale={1.0}
        position={[-3, -.30, -2]} // x position changed by -4
      />
      <primitive
        object={podium.clone()}
        scale={1.0}
        position={[0, -.30, 2]} // x position changed by -4
      />



      <MapControls
        minDistance={5}
        maxDistance={17}
        minAzimuthAngle={0}
        maxAzimuthAngle={0}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
      />
    </>
  );
};

export default Scene;
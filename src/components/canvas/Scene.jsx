import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const [sphere] = useMemo(
    () => [random.inSphere(new Float32Array(4998), { radius: 1.5 })],
    [],
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const AbstractShapes = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, 1, -2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#7000ff" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3, -1, -3]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#00f2ff" wireframe />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, -4, -5]}>
          <torusGeometry args={[3, 0.1, 16, 100]} />
          <meshStandardMaterial color="#ff007a" wireframe />
        </mesh>
      </Float>
    </group>
  );
};

const CameraRig = () => {
  const { mouse } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    const { camera } = state;
    target.current.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z);
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0, 0);
    camera.position.y = -window.scrollY * 0.005;
  });

  return null;
};

const Scene = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />
        <Stars />
        <AbstractShapes />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default Scene;

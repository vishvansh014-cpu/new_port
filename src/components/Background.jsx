import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ProfessionalDust({ count = 400 }) {
  const pointsRef = useRef();

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 15;
    positions[i + 1] = (Math.random() - 0.5) * 15;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#38bdf8" transparent opacity={0.35} />
    </points>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 bg-[#030712]">
      {/* Subtle Dark Radial Gradient Wrapper */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{ background: 'radial-gradient(circle at center, transparent 30%, #030712 90%)' }} 
      />
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ProfessionalDust />
      </Canvas>
    </div>
  );
}   
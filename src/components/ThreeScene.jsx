import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box() {
  const ref = useRef();

  // 🔥 rotation animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} /> {/* 👈 bigger cube */}
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      className="w-full h-full bg-red-500"
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 5] }} // 👈 camera fix
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={2} />
      <Box />
    </Canvas>
  );
}
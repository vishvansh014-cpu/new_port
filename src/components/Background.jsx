import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Define the Custom Shader Material
class AuroraMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      // We need time for animation and screen resolution for aspect ratio
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color("#0f172a") }, // Deep Blue/Black
        uColorB: { value: new THREE.Color("#38bdf8") }, // Cyan
        uResolution: { value: new THREE.Vector2() },
      },
      // Vertex shader: pass the position/uv through
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      // Fragment shader: The magic happens here (uses simplified FBM noise)
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        varying vec2 vUv;

        // Basic noise function
        float rand(vec2 n) { 
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 n) {
          const vec2 d = vec2(0.0, 1.0);
          vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
          return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
        }

        void main() {
          // Subtle, drifting noise
          vec2 tUv = vUv * 2.0; // Scale the noise
          float n = noise(tUv + uTime * 0.05); // Drifting
          n += noise(tUv * 2.0 - uTime * 0.02) * 0.5; // Layering

          // Mix colors based on noise value
          vec3 finalColor = mix(uColorA, uColorB, n * 0.35); // Keep contrast low

          // Subtle vignette fade at edges
          float vignette = 1.0 - smoothstep(0.4, 1.1, length(vUv - 0.5));
          
          gl_FragColor = vec4(finalColor * vignette, 1.0);
        }
      `,
      transparent: true,
      depthWrite: false, // Don't block background
    });
  }
}

// 2. Extend THREE so we can use <auroraMaterial /> in JSX
extend({ AuroraMaterial });

function BackgroundScene() {
  const materialRef = useRef();

  useFrame((state) => {
    // Update the 'time' uniform every frame for animation
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh scale={[1, 1, 1]}>
      {/* Plane covering the screen */}
      <planeGeometry args={[20, 20]} />
      <auroraMaterial ref={materialRef} />
    </mesh>
  );
}

export default function AuroraCanvas() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 bg-[#030712]">
      {/* Optional overlay gradient for softer edges */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{ background: 'linear-gradient(to bottom, transparent, #030712 95%)' }} 
      />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <BackgroundScene />
      </Canvas>
    </div>
  );
}
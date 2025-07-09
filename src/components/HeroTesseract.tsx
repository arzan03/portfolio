'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AvengersTestseract() {
  const groupRef = useRef<THREE.Group>(null);
  
  // 4D Tesseract vertices projected to 3D (inner and outer cubes)
  const outerVertices: [number, number, number][] = [
    [-1.5, -1.5, -1.5], [1.5, -1.5, -1.5], [1.5, 1.5, -1.5], [-1.5, 1.5, -1.5],
    [-1.5, -1.5, 1.5], [1.5, -1.5, 1.5], [1.5, 1.5, 1.5], [-1.5, 1.5, 1.5],
  ];
  
  const innerVertices: [number, number, number][] = [
    [-0.8, -0.8, -0.8], [0.8, -0.8, -0.8], [0.8, 0.8, -0.8], [-0.8, 0.8, -0.8],
    [-0.8, -0.8, 0.8], [0.8, -0.8, 0.8], [0.8, 0.8, 0.8], [-0.8, 0.8, 0.8],
  ];

  // Cube edges
  const edges = [
    [0,1],[1,2],[2,3],[3,0], // Bottom face
    [4,5],[5,6],[6,7],[7,4], // Top face
    [0,4],[1,5],[2,6],[3,7], // Vertical edges
  ];
  
  // Tesseract connections (between inner and outer cubes)
  const tesseractConnections = [
    [0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7] // Connect corresponding vertices
  ];

  // Animate rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.y += 0.008;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer cube edges - Blue/Cyan like space stone */}
      {edges.map(([a, b], i) => (
        <Line
          key={`outer-${i}`}
          points={[outerVertices[a], outerVertices[b]]}
          color="#4FC3F7"
          lineWidth={3}
          transparent
          opacity={0.9}
        />
      ))}
      
      {/* Inner cube edges - Brighter blue */}
      {edges.map(([a, b], i) => (
        <Line
          key={`inner-${i}`}
          points={[innerVertices[a], innerVertices[b]]}
          color="#00E5FF"
          lineWidth={4}
          transparent
          opacity={1}
        />
      ))}
      
      {/* Tesseract connections between inner and outer cubes */}
      {tesseractConnections.map(([a, b], i) => (
        <Line
          key={`connection-${i}`}
          points={[outerVertices[a], innerVertices[b]]}
          color="#81D4FA"
          lineWidth={2}
          transparent
          opacity={0.6}
        />
      ))}
      
      {/* Outer cube vertices - Glowing spheres */}
      {outerVertices.map((v, i) => (
        <mesh key={`outer-vertex-${i}`} position={v}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            emissive="#4FC3F7" 
            color="#4FC3F7" 
            emissiveIntensity={3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Inner cube vertices - Brighter spheres */}
      {innerVertices.map((v, i) => (
        <mesh key={`inner-vertex-${i}`} position={v}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            emissive="#00E5FF" 
            color="#00E5FF" 
            emissiveIntensity={4}
            transparent
            opacity={1}
          />
        </mesh>
      ))}
      
      {/* Central core - Tesseract energy */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          emissive="#00BCD4" 
          color="#00BCD4" 
          emissiveIntensity={2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

export default function HeroTesseract() {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4FC3F7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00E5FF" />
        <AvengersTestseract />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
      
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-cyan-300/40 blur-2xl rounded-full" />
      </div>
    </div>
  );
}

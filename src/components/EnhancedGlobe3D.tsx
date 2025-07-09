'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Html } from '@react-three/drei';
import { FaDocker, FaAws, FaGithub, FaGitlab, FaReact, FaPython, FaLinux, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiGooglecloud, SiTerraform, SiGo, SiPrometheus, SiGrafana } from 'react-icons/si';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const ICONS = [
  { icon: FaDocker, color: '#4FC3F7', name: 'Docker' },
  { icon: SiKubernetes, color: '#29B6F6', name: 'Kubernetes' },
  { icon: FaAws, color: '#FFB74D', name: 'AWS' },
  { icon: SiGooglecloud, color: '#42A5F5', name: 'GCP' },
  { icon: SiTerraform, color: '#AB47BC', name: 'Terraform' },
  { icon: FaGithub, color: '#E0E0E0', name: 'GitHub' },
  { icon: SiGo, color: '#4DD0E1', name: 'Go' },
  { icon: FaPython, color: '#FFF176', name: 'Python' },
  { icon: FaLinux, color: '#E0E0E0', name: 'Linux' },
  { icon: FaJenkins, color: '#EF5350', name: 'Jenkins' },
  { icon: FaGitlab, color: '#FF7043', name: 'GitLab' },
  { icon: FaReact, color: '#4FC3F7', name: 'React' },
  { icon: SiPrometheus, color: '#FF7043', name: 'Prometheus' },
  { icon: SiGrafana, color: '#FFB74D', name: 'Grafana' },
];

function AvengersStyleGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  // Generate sphere points with more structure
  const iconPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 2.5;
    
    for (let i = 0; i < ICONS.length; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / ICONS.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      positions.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  // Create mesh connections with Avengers-style energy flow
  const meshLines = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < iconPositions.length; i++) {
      for (let j = i + 1; j < iconPositions.length; j++) {
        const distance = new THREE.Vector3(...iconPositions[i]).distanceTo(new THREE.Vector3(...iconPositions[j]));
        if (distance < 4 && Math.random() > 0.6) {
          lines.push([
            new THREE.Vector3(...iconPositions[i]),
            new THREE.Vector3(...iconPositions[j]),
          ]);
        }
      }
    }
    return lines;
  }, [iconPositions]);

  // Generate background particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const radius = 4 + Math.random() * 6;
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = Math.PI * 2 * Math.random();
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  // Animate the globe with Avengers-style rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  return (
    <>
      {/* Background particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#4FC3F7" opacity={0.6} transparent />
      </points>

      <group ref={groupRef}>
        {/* Energy mesh connections */}
        {meshLines.map(([start, end], idx) => (
          <Line
            key={idx}
            points={[start, end]}
            color="#4FC3F7"
            lineWidth={1.5}
            transparent
            opacity={0.4}
          />
        ))}
        
        {/* Tech icons on sphere surface */}
        {iconPositions.map((pos, i) => {
          const Icon = ICONS[i].icon;
          return (
            <group key={i} position={pos as [number, number, number]}>
              {/* Glowing sphere behind icon */}
              <mesh>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial
                  emissive={ICONS[i].color}
                  emissiveIntensity={0.3}
                  color={ICONS[i].color}
                  transparent
                  opacity={0.8}
                />
              </mesh>
              
              {/* Icon */}
              <Html center>
                <div className="flex items-center justify-center pointer-events-none">
                  <span 
                    className="block text-2xl md:text-3xl transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_8px_currentColor]" 
                    style={{ color: ICONS[i].color }}
                  >
                    <Icon />
                  </span>
                </div>
              </Html>
            </group>
          );
        })}
        
        {/* Central energy core */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            emissive="#4FC3F7"
            emissiveIntensity={0.5}
            color="#4FC3F7"
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </>
  );
}

export default function EnhancedGlobe3D() {
  return (
    <div className="w-full h-[450px] md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4FC3F7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#AB47BC" />
        <AvengersStyleGlobe />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-400/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-500/15 blur-2xl rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
}
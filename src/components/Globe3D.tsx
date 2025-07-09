'use client';

// 3D Tech Mesh Globe using react-three-fiber, drei, and react-icons
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, Line, Html } from '@react-three/drei';
import { FaDocker, FaAws, FaGithub, FaGitlab, FaReact, FaPython, FaLinux, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiGooglecloud, SiTerraform, SiGo, SiPrometheus, SiGrafana } from 'react-icons/si';
import { useMemo } from 'react';
import * as THREE from 'three';

const ICONS = [
  { icon: FaDocker, color: '#2496ed' },
  { icon: SiKubernetes, color: '#326ce5' },
  { icon: FaAws, color: '#ff9900' },
  { icon: SiGooglecloud, color: '#4285f4' },
  { icon: SiTerraform, color: '#623ce4' },
  { icon: FaGithub, color: '#fff' },
  { icon: SiGo, color: '#00add8' },
  { icon: FaPython, color: '#ffd43b' },
  { icon: FaLinux, color: '#fff' },
  { icon: FaJenkins, color: '#d33833' },
  { icon: FaGitlab, color: '#fc6d26' },
  { icon: FaReact, color: '#61dafb' },
  { icon: SiPrometheus, color: '#e6522c' },
  { icon: SiGrafana, color: '#f46800' },
];

function randomSpherePoints(count: number, radius: number) {
  const points: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - 2 * (i + Math.random() * 0.3) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + Math.random() * 0.3);
    points.push([
      radius * Math.cos(theta) * Math.sin(phi) * (0.9 + Math.random() * 0.2),
      radius * Math.sin(theta) * Math.sin(phi) * (0.9 + Math.random() * 0.2),
      radius * Math.cos(phi) * (0.9 + Math.random() * 0.2),
    ]);
  }
  return points;
}

export default function Globe3D() {
  const iconPositions = useMemo(() => randomSpherePoints(ICONS.length, 2.2), []);
  const meshLines = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < iconPositions.length; i++) {
      for (let j = i + 1; j < iconPositions.length; j++) {
        if (Math.random() > 0.7) lines.push([
          new THREE.Vector3(...iconPositions[i]),
          new THREE.Vector3(...iconPositions[j]),
        ]);
      }
    }
    return lines;
  }, [iconPositions]);

  return (
    <div className="w-full h-[350px] md:h-[500px] aspect-square relative">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        {/* Mesh lines */}
        {meshLines.map(([start, end], idx) => (
          <Line key={idx} points={[start, end]} color="#0fffcf" lineWidth={1} opacity={0.3} transparent />
        ))}
        {/* Icons on globe */}
        {iconPositions.map((pos, i) => {
          const Icon = ICONS[i].icon;
          return (
            <mesh key={i} position={pos as [number, number, number]}>
              <Html center>
                <span className="block text-3xl md:text-4xl animate-glow hover:scale-110 hover:drop-shadow-[0_0_12px_#0fffcf] transition-transform duration-200 cursor-pointer" style={{ color: ICONS[i].color }}>
                  <Icon />
                </span>
              </Html>
            </mesh>
          );
        })}
        {/* Particles */}
        <Points limit={80}>
          <PointMaterial color="#0fffcf" size={0.08} sizeAttenuation transparent opacity={0.5} />
        </Points>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

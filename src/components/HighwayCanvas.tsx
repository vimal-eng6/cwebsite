"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface CheckpointData {
  label: string;
  zPos: number;
  index: number;
}

function GateCheckpoint({ label, zPos, index }: CheckpointData) {
  const wireframeGroupRef = useRef<THREE.Group>(null);
  const solidGroupRef = useRef<THREE.Group>(null);

  useFrame(({ camera }) => {
    const dist = Math.abs(camera.position.z - zPos);
    // Over a 20-unit window (from Z distance 35 down to 15), interpolate opacity
    let t = 0;
    if (dist <= 15) {
      t = 1;
    } else if (dist >= 35) {
      t = 0;
    } else {
      t = 1 - (dist - 15) / 20; // 0 to 1
    }

    if (wireframeGroupRef.current) {
      wireframeGroupRef.current.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && mesh.material) {
          const mat = mesh.material as THREE.Material;
          mat.transparent = true;
          mat.opacity = 1 - t;
        }
      });
    }

    if (solidGroupRef.current) {
      solidGroupRef.current.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && mesh.material) {
          const mat = mesh.material as THREE.Material;
          mat.transparent = true;
          mat.opacity = t;
        }
      });
    }
  });

  return (
    <group position={[0, 0, zPos]}>
      {/* 1. Wireframe Blueprint Gate (Active far away, fades out) */}
      <group ref={wireframeGroupRef}>
        {/* Left Pillar */}
        <mesh position={[-5, 3, 0]}>
          <boxGeometry args={[0.3, 6, 0.3]} />
          <meshBasicMaterial color="#FF7A1A" wireframe transparent opacity={1} />
        </mesh>
        {/* Right Pillar */}
        <mesh position={[5, 3, 0]}>
          <boxGeometry args={[0.3, 6, 0.3]} />
          <meshBasicMaterial color="#FF7A1A" wireframe transparent opacity={1} />
        </mesh>
        {/* Crossbar */}
        <mesh position={[0, 6.15, 0]}>
          <boxGeometry args={[10.3, 0.3, 0.3]} />
          <meshBasicMaterial color="#FF7A1A" wireframe transparent opacity={1} />
        </mesh>
      </group>

      {/* 2. Solid Industrial Gate (Active close up, fades in) */}
      <group ref={solidGroupRef}>
        {/* Left Pillar */}
        <mesh position={[-5, 3, 0]}>
          <boxGeometry args={[0.3, 6, 0.3]} />
          <meshStandardMaterial color="#14171A" roughness={0.8} transparent opacity={0} />
        </mesh>
        {/* Right Pillar */}
        <mesh position={[5, 3, 0]}>
          <boxGeometry args={[0.3, 6, 0.3]} />
          <meshStandardMaterial color="#14171A" roughness={0.8} transparent opacity={0} />
        </mesh>
        {/* Crossbar */}
        <mesh position={[0, 6.15, 0]}>
          <boxGeometry args={[10.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#FF7A1A" emissive="#FF7A1A" emissiveIntensity={1.0} roughness={0.5} transparent opacity={0} />
        </mesh>
      </group>

      {/* Floating label */}
      <Text 
        position={[0, 7.5, 0]} 
        fontSize={0.6} 
        color="#FFB300" 
        anchorX="center"
        anchorY="middle"
      >
        {`${String(index + 1).padStart(2, '0')} — ${label}`}
      </Text>
    </group>
  );
}

function ScrollBoundCamera({ autoPlay = false }: { autoPlay?: boolean }) {
  useFrame(({ camera, clock }) => {
    if (autoPlay) {
      const t = clock.getElapsedTime() * 12; // slow constant travel
      const loopLength = 350;
      const progress = (t % loopLength) / loopLength;

      // Smooth auto flythrough down the Z-axis
      camera.position.z = 80 - progress * 350;
      camera.position.y = 4.5 + Math.sin(progress * Math.PI * 2) * 0.5;
      camera.position.x = Math.cos(progress * Math.PI * 2) * 0.8;
      camera.lookAt(0, 1.8, camera.position.z - 30);
    } else {
      // Read Lenis scroll position dynamically from globally exported instance
      const scrollY = (window as any).__lenis?.scroll ?? window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      // Camera flies down the straight Z-axis highway
      camera.position.z = 80 - progress * 400;   // starts far back, flies past all gates down to -320
      camera.position.y = 8 - progress * 3;      // slight descent
      camera.position.x = Math.sin(progress * Math.PI * 0.5) * 2;  // gentle curve
      camera.lookAt(0, 2, camera.position.z - 30);
    }
  });

  return null;
}

function Highway() {
  const gates = ['MANUAL', 'DIGITAL', 'CONNECTED', 'AUTOMATED', 'INTELLIGENT', 'AI-POWERED'];

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 10, 20]} intensity={2} color="#FF7A1A" />
      <pointLight position={[0, 10, -20]} intensity={1} color="#FF7A1A" />
      <fog attach="fog" args={['#0B0D0F', 30, 200]} />

      {/* Road surface — long dark plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -150]}>
        <planeGeometry args={[12, 600]} />
        <meshStandardMaterial color="#1A1D20" roughness={0.9} />
      </mesh>

      {/* Dashed center line — repeated boxes */}
      {Array.from({ length: 120 }, (_, i) => (
        <mesh key={i} position={[0, -0.48, -i * 5 + 80]}>
          <boxGeometry args={[0.08, 0.02, 2]} />
          <meshStandardMaterial color="#FF7A1A" emissive="#FF7A1A" emissiveIntensity={0.6} />
        </mesh>
      ))}

      {/* 6 Gate Checkpoints — wireframe → solid on approach */}
      {gates.map((label, i) => (
        <GateCheckpoint key={label} label={label} zPos={-i * 50 + 10} index={i} />
      ))}
    </>
  );
}

export default function HighwayCanvas({ 
  scrollProgress, 
  autoPlay = false 
}: { 
  scrollProgress: number; 
  autoPlay?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    const fillPercent = Math.min(100, scrollProgress * 100);
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-brand-charcoal -z-20">
        <div className="blueprint-grid blueprint-grid-fine absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-4 bg-brand-steel rounded-full overflow-hidden border border-brand-steel/50 max-w-lg">
          <div 
            className="h-full bg-brand-orange transition-all duration-300 shadow-[0_0_10px_#FF7A1A]" 
            style={{ width: `${fillPercent}%` }}
          />
        </div>
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 text-center text-[10px] font-mono text-brand-steel-bright">
          MOBILE PERFORMANCE SYSTEM ACTIVE • ROAD METAPHOR {Math.round(fillPercent)}%
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2.5, 0], fov: 60, near: 0.1, far: 500 }}
        style={{ background: "#0B0D0F" }}
        gl={{ antialias: true }}
      >
        <ScrollBoundCamera autoPlay={autoPlay} />
        <Highway />
      </Canvas>
    </div>
  );
}

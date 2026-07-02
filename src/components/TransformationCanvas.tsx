"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const SATELLITES_COUNT = 8;
const satellitesData = [
  { radius: 2.2, speed: 0.4, height: -0.4, baseAngle: 0 },
  { radius: 2.5, speed: -0.5, height: 0.5, baseAngle: Math.PI / 4 },
  { radius: 2.8, speed: 0.3, height: -0.8, baseAngle: Math.PI / 2 },
  { radius: 3.1, speed: -0.4, height: 0.9, baseAngle: (3 * Math.PI) / 4 },
  { radius: 3.4, speed: 0.3, height: -0.2, baseAngle: Math.PI },
  { radius: 3.7, speed: -0.5, height: 0.6, baseAngle: (5 * Math.PI) / 4 },
  { radius: 4.0, speed: 0.4, height: -0.6, baseAngle: (3 * Math.PI) / 2 },
  { radius: 4.3, speed: -0.3, height: 0.3, baseAngle: (7 * Math.PI) / 4 },
];

function SceneContent({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.IcosahedronGeometry>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const shellMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const satelliteRefs = useRef<(THREE.Mesh | null)[]>([]);
  const lineRefs = useRef<(THREE.Line | null)[]>([]);

  const originalPositions = useRef<Float32Array | null>(null);
  const jitters = useRef<Float32Array | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Dynamic scroll smoothing
  const smoothedProgress = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionHandler);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  // Capture original vertices and generate random jitters
  useEffect(() => {
    if (geometryRef.current) {
      const posAttr = geometryRef.current.getAttribute("position");
      originalPositions.current = new Float32Array(posAttr.array);

      const count = posAttr.count;
      const jitterArr = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        jitterArr[i] = Math.random() * 0.45 + 0.05; // random jitter offsets
      }
      jitters.current = jitterArr;
    }
  }, []);

  // Generate particle coordinate array once
  const particleCount = isMobile ? 400 : 1200;
  const [particlePositions] = useState(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;     // X spread
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22; // Y spread
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22; // Z spread
    }
    return arr;
  });

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Lerp/Smooth the scroll progress
    smoothedProgress.current = THREE.MathUtils.lerp(
      smoothedProgress.current,
      scrollProgress,
      delta * 6
    );

    const progress = smoothedProgress.current;

    // Accessibility motion freeze
    const roughnessFactor = prefersReducedMotion ? 0.3 : 1 - progress;

    // 2. Vertex Displacement / Morphing Sphere
    if (
      geometryRef.current &&
      originalPositions.current &&
      jitters.current &&
      !prefersReducedMotion
    ) {
      const posAttr = geometryRef.current.getAttribute("position");
      const posArray = posAttr.array as Float32Array;
      const orig = originalPositions.current;
      const jitter = jitters.current;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const x = orig[ix];
        const y = orig[iy];
        const z = orig[iz];

        const len = Math.sqrt(x * x + y * y + z * z);
        if (len > 0) {
          const nx = x / len;
          const ny = y / len;
          const nz = z / len;

          // Compute deformation with a subtle time sine wobble for continuous breathing
          const wave = Math.sin(t * 1.5 + jitter[i] * 10) * 0.12;
          const displacement = jitter[i] * roughnessFactor * 0.65 + wave * roughnessFactor;

          posArray[ix] = x + nx * displacement;
          posArray[iy] = y + ny * displacement;
          posArray[iz] = z + nz * displacement;
        }
      }
      posAttr.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
    }

    // 3. Color stops lerping: Color A (Rust Orange) -> Color B (Amber) -> Color C (Cyan)
    const colorA = new THREE.Color("#FF7A1A");
    const colorB = new THREE.Color("#FFB300");
    const colorC = new THREE.Color("#00F0FF");
    const currentColor = new THREE.Color();

    if (progress < 0.5) {
      currentColor.copy(colorA).lerp(colorB, progress * 2);
    } else {
      currentColor.copy(colorB).lerp(colorC, (progress - 0.5) * 2);
    }

    if (materialRef.current) {
      materialRef.current.color.copy(currentColor);
      // Brighten sphere: apply emissive glow color matching current color
      materialRef.current.emissive.copy(currentColor);
      materialRef.current.emissiveIntensity = 0.35; // glowing sphere core
      // Roughness down: 0.75 -> 0.2, Metalness up: 0.15 -> 0.7
      materialRef.current.roughness = THREE.MathUtils.lerp(0.75, 0.2, progress);
      materialRef.current.metalness = THREE.MathUtils.lerp(0.15, 0.7, progress);
    }

    // 4. Wireframe outer shell transparency
    if (shellRef.current && shellMaterialRef.current) {
      // Rotation relative to base sphere
      if (!prefersReducedMotion) {
        shellRef.current.rotation.y = -t * 0.05;
        shellRef.current.rotation.x = t * 0.02;
      }
      // Opacity goes from 0 to 0.9 past midpoint
      let shellOpacity = 0;
      if (progress > 0.4) {
        shellOpacity = Math.min(0.9, (progress - 0.4) * 2.2 * 0.9);
      }
      shellMaterialRef.current.opacity = shellOpacity;
      shellMaterialRef.current.color.copy(colorC);
    }

    // 5. Orbiting Satellites and Connection Lines
    satelliteRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const data = satellitesData[idx];

      const angle = data.baseAngle + (prefersReducedMotion ? 0 : t * data.speed * 0.7);
      const x = Math.cos(angle) * data.radius;
      const z = Math.sin(angle) * data.radius;
      const y = data.height;
      ref.position.set(x, y, z);

      // Satellites fade in sequentially
      const triggerScroll = idx / SATELLITES_COUNT;
      let opacity = 0;
      if (progress > triggerScroll) {
        opacity = Math.min(0.8, (progress - triggerScroll) * 4);
      }

      const mat = ref.material as THREE.MeshBasicMaterial;
      mat.opacity = opacity;
      mat.color.copy(currentColor);

      // Line updates
      const line = lineRefs.current[idx];
      if (line) {
        const posAttr = line.geometry.getAttribute("position");
        posAttr.setXYZ(1, x, y, z);
        posAttr.needsUpdate = true;

        const lineMat = line.material as THREE.LineBasicMaterial;
        lineMat.opacity = opacity * 0.25; // line is slightly more faint
        lineMat.color.copy(currentColor);
      }
    });

    // 6. Overall Group rotation & Wobble (Sphere and Text rotate together inside this group)
    if (groupRef.current && !prefersReducedMotion) {
      // Fast at scroll 0, slow drift at scroll 1
      const rotSpeed = THREE.MathUtils.lerp(0.8, 0.1, progress);
      groupRef.current.rotation.y += rotSpeed * delta;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.12 * (1 - progress);
    }

    // 7. Rotating Particles
    if (pointsRef.current) {
      if (!prefersReducedMotion) {
        pointsRef.current.rotation.y = t * 0.015;
      }
      const ptsMaterial = pointsRef.current.material as THREE.PointsMaterial;
      ptsMaterial.color.copy(currentColor);
    }

    // 8. Subtle Parallax camera motion (Y offset and slight X wobble)
    const camera = state.camera;
    if (prefersReducedMotion) {
      camera.position.set(0, 0, 7.5);
      camera.lookAt(0, 0, 0);
    } else {
      const mouseX = state.pointer.x * 0.4;
      const mouseY = state.pointer.y * 0.3;
      const scrollYOffset = progress * -2.2; // camera moves down slightly

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, scrollYOffset + mouseY, 0.05);
      camera.position.z = 7.5;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.12} />
      
      {/* Front key headlight for bright illumination */}
      <pointLight position={[0, 2, 7.5]} intensity={3.5} color="#FFFFFF" />

      {/* Dynamic Point Lights */}
      <pointLight position={[6, 6, 6]} intensity={2.5} color="#FF7A1A" />
      <pointLight position={[-6, -6, -6]} intensity={1.5} color="#00F0FF" />

      {/* Main morphing mesh */}
      <mesh ref={meshRef}>
        <icosahedronGeometry ref={geometryRef} args={[1.55, 2]} />
        <meshStandardMaterial
          ref={materialRef}
          flatShading={true}
          roughness={0.75}
          metalness={0.15}
          color="#FF7A1A"
        />

        {/* 1. Stamped CALDIM text (Front side - moved out to Z=1.92 to prevent mesh clipping) */}
        <Text
          position={[0, 0, 1.92]}
          fontSize={0.36}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#0B0D0F"
        >
          CALDIM
        </Text>

        {/* 2. Stamped CALDIM text (Back side - moved out to Z=-1.92 to prevent mesh clipping) */}
        <Text
          position={[0, 0, -1.92]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.36}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#0B0D0F"
        >
          CALDIM
        </Text>
      </mesh>

      {/* Wireframe outer shell */}
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.72, 1]} />
        <meshBasicMaterial
          ref={shellMaterialRef}
          color="#00F0FF"
          wireframe={true}
          transparent={true}
          opacity={0}
        />
      </mesh>

      {/* Satellites and connections */}
      {satellitesData.map((sat, idx) => (
        <group key={idx}>
          {/* Node sphere */}
          <mesh
            ref={(el) => {
              if (el) satelliteRefs.current[idx] = el;
            }}
          >
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshBasicMaterial color="#FF7A1A" transparent={true} opacity={0} />
          </mesh>

          {/* Connection line */}
          <primitive
            object={
              new THREE.Line(
                new THREE.BufferGeometry().setAttribute(
                  "position",
                  new THREE.BufferAttribute(new Float32Array([0, 0, 0, 0, 0, 0]), 3)
                ),
                new THREE.LineBasicMaterial({
                  color: "#FF7A1A",
                  transparent: true,
                  opacity: 0,
                  linewidth: 1,
                })
              )
            }
            ref={(el: THREE.Line | null) => {
              if (el) lineRefs.current[idx] = el;
            }}
          />
        </group>
      ))}

      {/* Scattered background particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#FF7A1A"
          transparent={true}
          opacity={0.35}
        />
      </points>
    </group>
  );
}

export default function TransformationCanvas({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  // Compute dynamically transitioning CSS background colors
  const r = Math.round(THREE.MathUtils.lerp(11, 248, scrollProgress));
  const g = Math.round(THREE.MathUtils.lerp(13, 249, scrollProgress));
  const b = Math.round(THREE.MathUtils.lerp(15, 250, scrollProgress));
  const bgStyle = `rgb(${r}, ${g}, ${b})`;

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-colors duration-300"
      style={{ backgroundColor: bgStyle }}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <SceneContent scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}

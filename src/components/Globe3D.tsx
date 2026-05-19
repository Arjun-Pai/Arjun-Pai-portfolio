import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Wireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.15; });
  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.58, 64, 64]} />
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.04} />
      </mesh>
      <Ring radius={2.1} color="#00F5FF" speed={0.3} />
      <Ring radius={2.4} color="#FFB700" speed={-0.2} tilt={0.6} />
    </group>
  );
}

function Ring({ radius, color, speed, tilt = 0 }: { radius: number; color: string; speed: number; tilt?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.z += d * speed; });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

function OrbitingText() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.25; });
  const text = "PAIO INTERNATIONAL · ";
  const chars = text.split("");
  return (
    <group ref={ref}>
      {chars.map((ch, i) => {
        const a = (i / chars.length) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 2.1, 0, Math.sin(a) * 2.1]} rotation={[0, -a + Math.PI / 2, 0]}>
            <planeGeometry args={[0.18, 0.22]} />
            <meshBasicMaterial color="#FFB700" transparent opacity={0.9} />
          </mesh>
        );
      })}
    </group>
  );
}

export function Globe3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <Wireframe />
      <OrbitingText />
    </Canvas>
  );
}

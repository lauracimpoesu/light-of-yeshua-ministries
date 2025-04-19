
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedMenorah() {
  const menorahRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (menorahRef.current) {
      menorahRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={menorahRef}>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Main stem */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 3, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Branches */}
      {[-1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2].map((x, i) => (
        <group key={i} position={[x, 1.2, 0]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.08, 0.4, 32]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Flames */}
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[0, 0.4, 0]}>
              <coneGeometry args={[0.1, 0.3, 32]} />
              <meshStandardMaterial 
                color="#FFA500" 
                emissive="#FFD700"
                emissiveIntensity={2}
                toneMapped={false}
              />
            </mesh>
          </Float>
        </group>
      ))}
    </group>
  );
}

function AnimatedDove() {
  const doveRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (doveRef.current) {
      doveRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      doveRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={doveRef} scale={0.7} position={[0, 2, 0]}>
        {/* Body */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Wings */}
        {[-1, 1].map((x, i) => (
          <mesh key={i} position={[x * 0.5, 0, 0]} rotation={[0, 0, x * Math.PI * 0.2]}>
            <planeGeometry args={[1, 0.8]} />
            <meshStandardMaterial 
              color="#D4AF37" 
              metalness={0.8} 
              roughness={0.2}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

const AnimatedLogo = () => {
  return (
    <div className="w-[300px] h-[400px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedMenorah />
        <AnimatedDove />
      </Canvas>
    </div>
  );
};

export default AnimatedLogo;

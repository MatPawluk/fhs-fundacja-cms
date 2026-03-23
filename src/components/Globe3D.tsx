import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

// Warsaw coordinates (lat: 52.23, lon: 21.01)
// Shanghai coordinates (lat: 31.23, lon: 121.47)

const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

const GlobeModel = () => {
  const globeRef = useRef<THREE.Group>(null);
  const warsawRef = useRef<THREE.Mesh>(null);
  const shanghaiRef = useRef<THREE.Mesh>(null);
  
  const radius = 2;
  const warsawPos = latLonToVector3(52.23, 21.01, radius);
  const shanghaiPos = latLonToVector3(31.23, 121.47, radius);
  
  // Create arc curve between points that follows the globe surface better
  const curvePoints = useMemo(() => {
    const midPoint = new THREE.Vector3()
      .addVectors(warsawPos, shanghaiPos)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(radius * 1.3); // Arc height above globe
    
    const curve = new THREE.QuadraticBezierCurve3(
      warsawPos,
      midPoint,
      shanghaiPos
    );
    return curve.getPoints(50).map(p => [p.x, p.y, p.z] as [number, number, number]);
  }, []);
  
  useFrame((state) => {
    if (globeRef.current) {
      // Slow rotation
      globeRef.current.rotation.y += 0.001;
    }
    if (warsawRef.current) {
      warsawRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2);
    }
    if (shanghaiRef.current) {
      shanghaiRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + 1) * 0.2);
    }
  });
  
  return (
    <group ref={globeRef}>
      {/* Globe */}
      <Sphere args={[radius, 64, 64]}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.4}
          roughness={0.7}
          wireframe={false}
        />
      </Sphere>
      
      {/* Grid lines on globe */}
      <Sphere args={[radius + 0.02, 32, 32]}>
        <meshBasicMaterial
          color="#c4ff00"
          wireframe={true}
          transparent
          opacity={0.08}
        />
      </Sphere>
      
      {/* Warsaw marker */}
      <mesh ref={warsawRef} position={warsawPos}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#c4ff00" />
        <pointLight color="#c4ff00" intensity={2} distance={1} />
      </mesh>
      
      {/* Shanghai marker */}
      <mesh ref={shanghaiRef} position={shanghaiPos}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#c4ff00" />
        <pointLight color="#c4ff00" intensity={2} distance={1} />
      </mesh>
      
      {/* Connection line using drei Line */}
      <Line
        points={curvePoints}
        color="#c4ff00"
        lineWidth={3}
        transparent
        opacity={0.8}
      />
    </group>
  );
};

export const Globe3D = () => {
  return (
    <div className="relative w-full h-[600px] max-w-4xl mx-auto">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 40 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <GlobeModel />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Labels - positioned based on 3D projection */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 bg-gray-900/90 px-4 py-2 rounded-lg border border-lime/40 shadow-lg shadow-lime/10">
        <span className="text-lime text-sm font-medium">Warszawa</span>
      </div>
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 bg-gray-900/90 px-4 py-2 rounded-lg border border-lime/40 shadow-lg shadow-lime/10">
        <span className="text-lime text-sm font-medium">Shanghai</span>
      </div>
    </div>
  );
};
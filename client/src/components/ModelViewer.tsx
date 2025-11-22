
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { RotateCcw, Info } from "lucide-react";
import * as THREE from "three";

interface JewelryModelProps {
  modelUrl?: string;
  color?: string;
}

function JewelryModel({ modelUrl, color = "#C9A55B" }: JewelryModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  // If no model URL is provided, show the placeholder
  if (!modelUrl) {
    return (
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
    );
  }

  // Load and display the 3D model
  try {
    const gltf = useGLTF(modelUrl);
    return (
      <primitive 
        ref={meshRef}
        object={gltf.scene} 
        scale={2}
        castShadow
        receiveShadow
      />
    );
  } catch (error) {
    // Fallback to placeholder if model fails to load
    return (
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
    );
  }
}

interface ModelViewerProps {
  modelUrl?: string;
}

function Scene({ modelUrl }: ModelViewerProps) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <JewelryModel modelUrl={modelUrl} />
      <Environment preset="studio" />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={8}
      />
    </>
  );
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resetCamera = () => {
    window.location.reload();
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-secondary/30 to-accent/20 rounded-xl overflow-hidden">
      <Canvas
        ref={canvasRef}
        shadows
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene modelUrl={modelUrl} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2">
        <Info className="w-3.5 h-3.5" />
        <span>Drag to rotate • Scroll to zoom • Click to pan</span>
      </div>

      <Button
        size="sm"
        variant="outline"
        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border-white/20"
        onClick={resetCamera}
        data-testid="button-reset-view"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset View
      </Button>
    </div>
  );
}

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";

export default function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
        <Stats />
      </Canvas>
    </>
  );
}

import { Canvas } from "@react-three/fiber";
import "./App.css"
import { Suspense } from "react";
import Iphone from "./Iphone";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import './App.css'

function Model() {

  return (
    <>
    <Canvas className="canvas" style={{height:'100vh'}}>
      <ambientLight intensity={6} />
      <OrbitControls/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
      <Suspense fallback={null} >
        <Iphone/>
      </Suspense>
    </Canvas>
    </>
  );
}

export default Model
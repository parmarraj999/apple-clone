import { useGSAP } from "@gsap/react";
import "./App.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"
import Nav from "./layout/navbar/nav";
import Header from "./layout/header/header";
import Highlight from "./layout/highlight/highlight";
import Model from "./layout/model/model";
import { Canvas, useFrame } from "@react-three/fiber";
import Iphone from "./Iphone";
import { Suspense, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lights from "./layout/model/Lights";
import { IphoneBlue } from "./Iphone-blue";
import { IphonePink } from "./Iphone-pink";
import { IphoneWhite } from "./Iphone-white";
import StorySection from "./layout/story-section/storySection";
import Chip from "./layout/chipSection/chip";
import AnimalSection from "./layout/animalSection/animalSection";
import CameraSection from "./layout/cameraSection/cameraSection";
import ZoomSection from "./layout/zoomSection/zoomSection";
import Footer from "./layout/footer/footer";

gsap.registerPlugin(ScrollTrigger)

function App() {

  useGSAP(() => {
    gsap.from(".size-btn", {
      y: 50,
      opacity: 0,
      delay: .7,
      scrollTrigger: {
        trigger: ".size-btn"
      }
    })
    gsap.from(".color-btn", {
      y: 50,
      opacity: 0,
      delay: .7,
      scrollTrigger: {
        trigger: ".color-btn"
      }
    })
    gsap.from(".view-box", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".view-box"
      }
    })
    gsap.from(".model-container > h1", {
      y: 100,
      opacity: 0,
      delay: .5,
      scrollTrigger: {
        trigger: ".view-box"
      }
    })
  })

  const [sizeBtn, setSizeBtn] = useState(false);
  const [currPhone,setCurrPhone] = useState("black")

  return (
    <div className="App">
      <Nav />
      <Header />
      <Highlight />
      <div className="model-container" >
        {
          currPhone === "black" ?
        <Canvas className="view-box">
          <Lights />
          <OrbitControls enableZoom={false} enablePan={false} />
          <PerspectiveCamera position={[0, 10, 4]} />
          <Suspense fallback={null} >
            <Iphone scale={sizeBtn ? [30, 30, 30] : [23, 23, 23]} />
          </Suspense>
        </Canvas> : ""
        }
        {
          currPhone === "blue" ?
        <Canvas className="view-box">
          <Lights />
          <OrbitControls enableZoom={false} enablePan={false} />
          <PerspectiveCamera position={[0, 10, 4]}/>
          <Suspense fallback={null} >
            <IphoneBlue scale={[1.2,1.2,1.2]} />
          </Suspense>
        </Canvas>:""
        }
        {
          currPhone === "pink" ?
        <Canvas className="view-box">
          <Lights />
          <OrbitControls enableZoom={false} enablePan={false} />
          <PerspectiveCamera position={[0, 10, 4]}/>
          <Suspense fallback={null} >
            <IphonePink scale={[1.2,1.2,1.2]} />
          </Suspense>
        </Canvas>:""
        }
        {
          currPhone === "white" ?
        <Canvas className="view-box">
          <Lights />
          <OrbitControls enableZoom={false} enablePan={false} />
          <PerspectiveCamera position={[0, 10, 4]}/>
          <Suspense fallback={null} >
            <IphoneWhite scale={[1.2,1.2,1.2]} />
          </Suspense>
        </Canvas>:""
        }
        <h1 style={{ color: "white", fontSize: "18px" }}>drag to see model</h1>
        <div className="btn-container-model" >
          <div className="color-btn">
            <div className="color-box" style={{background:"black"}} onClick={()=>setCurrPhone("black")}></div>
            <div className="color-box" style={{background:"#2F4452"}} onClick={()=>setCurrPhone("blue")}></div>
            <div className="color-box" style={{background:"#E3C8CA"}} onClick={()=>setCurrPhone("pink")}></div>
            <div className="color-box" style={{background:"#DDDDDD"}} onClick={()=>setCurrPhone("white")}></div>
          </div>
          <div className="size-btn" >
          <div onClick={() => setSizeBtn(false)} className="ball-btn" >6.1"</div>
          <div onClick={() => setSizeBtn(true)} className="ball-btn">6.7"</div>
          </div>
        </div>
      </div>
      <StorySection/>
      <Chip/>
      <AnimalSection/>
      <CameraSection/>
      <ZoomSection/>
      <Footer/>
    </div>
  );
}

export default App;

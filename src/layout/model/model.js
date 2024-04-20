import React, { useRef, useState } from 'react'
import "./model.css"
import ModelView from './modelView'
import * as THREE from "three"
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

function Model() {

    const [size, setSize] = useState('small');
    const [model,setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ['#8f8a81', '#ffe789', '#6f6c64'],
        img:"../../../../images/yellow.jpg"
    })
    const models = [ 
        {
            id:1,
            title: "iPhone 15 Pro in Natural Titanium",
            color: ['#8f8a81', '#ffe789', '#6f6c64'],
            img:"../../../../images/yellow.jpg"
        },
        {
            id:2,
            title:"iPhone 15 Pro in Blue Titanium",
            color : ["#8f8a81","#ffe7b9","#6f6c64"],
            img :"../../../../images/blue.jpg"
        },
        {
            id:3,
            title:"iPhone 15 Pro in White Titanium",
            color : ["#c9c8c2","#ffffff","#c9c89c2"],
            img :"../../../../images/white.jpg"
        },
        {
            id:3,
            title:"iPhone 15 Pro in Black Titanium",
            color : ["#454749","#3b3b3b","#181819"],
            img :"../../../../images/black.jpg"
        }
    ]

    //camera controll 
    const cameraControllSmall = useRef();
    const cameraControllLarge = useRef();

    //model 
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)

    return (
        <div className='model-container' >
            <div>
                <h2>Take a closer look.</h2>
            </div>
            <div className='model-views'>
                <ModelView
                    index={1}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControllSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                />
                <ModelView
                    index={1}
                    groupRef={large}
                    gsapType="view1"
                    controlRef={cameraControllLarge}
                    setRotaionState={setLargeRotation}
                    item={model}
                    size={size}
                />
                <Canvas className='canvas' style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden"
                }}
                    eventSource={document.getElementById('root')}
                >
                    <View.Port />
                </Canvas>
            </div>
            <div className='model-details'>
                <p>{model.title}</p>
                <div style={{display:"flex",gap:"1rem"}} >
                <ul>
                    {models.map((data)=>{
                        return(
                            <li style={{width:'15px',height:'15px',background:`${data.color[0]}`,borderRadius:"50%"}}
                            onClick={()=>setModel(data)}
                            ></li>
                        )
                    })}
                </ul>
                <button className='size-btn' >
                    <p>6.1"</p>
                    <p>6.7"</p>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Model
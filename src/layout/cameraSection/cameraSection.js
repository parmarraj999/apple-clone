import React from 'react'
import './cameraSection.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'

function CameraSection() {

    useGSAP(()=>{
        gsap.from(".model-img",{
            y:100,
            opacity:0,
            scrollTrigger:{
                trigger:".model-img",
                scrub:true,
                start:"top 80%",
                end:"top 60%"
            }
        })
        gsap.from(".camera-content > h2",{
            y:100,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".camera-content > h2",
                scrub:true,
                start:"top 80%",
                end:"top 60%"
            }
        })
    })

  return (
    <div className='camera-section-container' >
        <div>
            <img src='../../../../assets/images/model-image.jpg' className='model-img'/>
        </div>
        <div className='camera-content'>
            <h2>The 48MP Main camera is more advanced than ever, capturing super‑high‑resolution photos with a <span>new level of detail and color.</span></h2>
            <h2>You’ll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog, or cat, iPhone automatically captures depth information. So you can choose to instantly <span>see your photo as a portrait,</span> with an artful blur effect. Or later in the Photos app.</h2>
        </div>
    </div>
  )
}

export default CameraSection
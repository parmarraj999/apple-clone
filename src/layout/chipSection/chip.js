import React from 'react'
import "./chip.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
function Chip() {

  useGSAP(()=>{
    gsap.from(".chip-img",{
      scale:1.5,
      opacity:0,
      duration:.4,
      scrollTrigger:{
        trigger:".chip-img",
        scrub:1,
        start:"top 90%",
        end:"top 75%"
      }
    })
    gsap.from(".content-box-1 > h1",{
      y:100,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".content-box-1 > h1",
        scrub:1,
        start:"top 90%",
        end:"top 75%"
      }
    })
    gsap.from(".content-box-2 > h1",{
      y:100,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".content-box-2 > h1",
        scrub:1,
        start:"top 90%",
        end:"top 85%"
      }
    })
    gsap.from(".content-box-2 > h2",{
      y:100,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".content-box-2 > h1",
        scrub:1,
        start:"top 90%",
        end:"top 85%"
      }
    })
  })

  return (
    <div className='chip-section-container' >
        <img src='../../../../assets/images/chip.jpg' className='chip-img' />
        <div className='chip-header' >
            <h2>A17 Pro chip.</h2>
            <h2>A monster win for gaming.</h2>
            <p>It’s here. The biggest redesign in the history of Apple GPUs.</p>
        </div>
        <div className='frame-section' >
            <img src='../../../../assets/images/frame.png'/>
        </div>
        <div className='chip-content' >
           <div className='content-box-1'>
            <h1>A17 Pro is an entirely new class of iPhone chip that delivers our <span>best graphics performance by far.</span></h1>
            <h1>Mobile <span>games will look and feel so immersive</span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.</h1>
           </div>
           <div className='content-box-2' >
            <h2>New</h2>
            <h1>Pro-class GPU</h1>
            <h2>with 6 cores</h2>
           </div>
        </div>
    </div>
  )
}

export default Chip
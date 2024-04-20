import React from 'react'
import "./zoomSection.css"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'

function ZoomSection() {

    useGSAP(()=>{
        gsap.from(".zoom-img-container > img",{
            scale:2,
            scrollTrigger:{
                trigger:".zoom-img-container",
                scrub:1,
                start:"top 80%",
                end:"top 50%"
            }
        })
    })

    const handleClick5 = ()=>{
        gsap.to(".zoom-img-container > img",{
            scale:2.2
        })
        gsap.to(".one",{
            color:"white"
        })
        gsap.to(".two",{
            color:"white"
        })
        gsap.to(".three",{
            color:"yellow"
        })
        gsap.to(".zero-five",{
            color:"white"
        })

    }
    const handleClick = ()=>{
        gsap.to(".zoom-img-container > img",{
            scale:1
        })
        gsap.to(".zero-five",{
            color:"yellow"
        })
        gsap.to(".one",{
            color:"white"
        })
        gsap.to(".two",{
            color:"white"
        })
        gsap.to(".three",{
            color:"white"
        })
    }
    const handleClick1 = ()=>{
        gsap.to(".zoom-img-container > img",{
            scale:1.2
        })
        gsap.to(".one",{
            color:"yellow"
        })
        gsap.to(".two",{
            color:"white"
        })
        gsap.to(".three",{
            color:"white"
        })
        gsap.to(".zero-five",{
            color:"white"
        })
    }
    const handleClick2 = ()=>{
        gsap.to(".zoom-img-container > img",{
            scale:1.5
        })
        gsap.to(".two",{
            color:"yellow"
        })
        gsap.to(".three",{
            color:"white"
        })
        gsap.to(".zero-five",{
            color:"white"
        })
        
    }

  return (
    <div className='zoom-section-container' >
        <div className='zoom-header' >
            <h1>120 mm of</h1>
            <h1>pure Pro zoom.</h1>
        </div>
        <div className='zoom-img-container' >
            <img src='../../../../assets/images/zoom-img.jpg' />
        </div>
        <div className='size-btn-container2'>
            <div className='zero-five'  onClick={handleClick}>.5</div>
            <div className='one' onClick={handleClick1} >1</div>
            <div className='two' onClick={handleClick2}>2</div>
            <div className='three' onClick={handleClick5}>5</div>
        </div>
    </div>
  )
}

export default ZoomSection
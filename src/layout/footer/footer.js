import React from 'react'
import './footer.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'

function Footer() {

    useGSAP(()=>{
        gsap.from(".footer-container > h1",{
            y:80,
            opacity:0,
            stagger:.2,
            scrollTrigger:{
                trigger:".footer-container > h1",
                scrub:1,
                start:"top 100%",
                end:"top 100%"
            }
        })
    })

  return (
    <div className='footer-container' >
        <h1 style={{color:"white"}}>Coded</h1>
        <h1>and</h1>
        <h1 style={{color:"white"}}>Clone</h1>
        <h1>by</h1>
        <h1><a href='https://github.com/parmarraj999'>Raj Parmar</a></h1>
    </div>
  )
}

export default Footer
import React from 'react'
import "./header.css"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'

function Header() {

    useGSAP(()=>{
        gsap.from(".hero-title",{
            opacity:0,
            duration:.7,
            delay:1.5
        })
        gsap.from(".header-details",{
            y:50,
            duration:.7,
            opacity:0,
            delay:1.5
        })
    })

  return (
    <div className='header-container' >
        <h2 className='hero-title'>iPhone 15 Pro</h2>
        <video className='hero-video-large' autoPlay muted>
            <source src='../../../../assets/video/hero.mp4'></source>
        </video>
        <video className='hero-video-small' autoPlay muted>
            <source src='../../../../assets/video/smallHero.mp4'></source>
        </video>
        <div className='header-details' >
            <button>Buy</button>
            <h4>From $199/month or $999</h4>
        </div>
    </div>
  )
}

export default Header
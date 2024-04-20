import React from 'react'
import './animalSection.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'

function AnimalSection() {

    useGSAP(()=>{
        gsap.from('.camera-title',{
            opacity:0,
            scrollTrigger:{
                trigger:".camera-title",
                scrub:1.2,
                start :"top 75%",
                end:"top 50%",
            }
        })
        gsap.from('.camera-section-wrapper > p',{
            opacity:0,
            scrollTrigger:{
                trigger:".camera-section-wrapper > p",
                scrub:1.2,
                start :"top 75%",
                end:"top 50%",
            }
        })
        gsap.to(".animal-img",{
            scale:1,
            scrollTrigger:{
                trigger:".animal-img",
                scrub:true,
                start:"top 50%",
                end:"top 30%"
            }
        })
    })

  return (
    <div className='animal-section-container'>
        <div className='animal-section-wrapper' >
            <h1 className='animal-title'>A camera that captures your wildest imagination.</h1>
            <p>From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
        </div>
        <img src='../../../../assets/images/animal.jpg' className='animal-img'/>
    </div>
  )
}

export default AnimalSection
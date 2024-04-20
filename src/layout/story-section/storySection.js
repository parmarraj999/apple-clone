import React from 'react'
import "./storySection.css"
import Pop from '../pop/pop'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'

function StorySection() {

    useGSAP(()=>{
        gsap.to(".explore-main-img",{
            scale:1.5,
            opacity:1,
            scrollTrigger:{
                trigger:".explore-main-img",
                scrub:1,
                start:"top 80%",
                end:"top 50%"
            }
        })
        gsap.from('.h1',{
            y:100,
            opacity:0,
            stagger:.5,
            scrollTrigger:{
                trigger:".h1",
                scrub:1,
                start:"top 90%",
                end :"top 80%"
            }
        })
        gsap.from(".h1 > span",{
            color:"grey",
            duration:.4,
            scrollTrigger:{
                trigger:".h1 > span",
                scrub:1,
                start:"top 90%",
                end :"top 80%"
            }
        })
    })

    return (
        <div className='story-section-container' >
            <h1 className='story-title'>Explore the full story.</h1>
            <div className='story-header' >
                <h2>iPhone.<br></br>Forged in titanium</h2>
            </div>
            <div className='story-image-container'>
                <img src='../../../../assets/images/explore0.jpg' />
                <div className='explore-img' >
                    <div className='explore-img-div'>
                        <img src='../../../../assets/images/explore1.jpg' className='explore-main-img' />
                    </div>
                    <div className='explore-img-div'>
                        <img src='../../../../assets/images/explore2.jpg' className='explore-main-img' />
                    </div>
                </div>
            </div>
            <div className='story-content' >
                <h3 className='h1'>iPhone 15 Pro is <span>the first iPhone to feature an aerospace‑grade titanium design</span>, using the same alloy that spacecraft use for missions to Mars.</h3>
                <h3 className='h1'>Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <span>lightest Pro models ever.</span> You’ll notice the difference the moment you pick one up.</h3>
            </div>
            <Pop title="More on Desing & Display" />
        </div>
    )
}

export default StorySection
import React from 'react'
import "./highlight.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCirclePlay, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/all'
import VideoCrousel from './videoCrousel'

function Highlight() {

    useGSAP(() => {
        gsap.from(".highlight-title", {
            y: 50,
            duration: .7,
            opacity: 0,
            scrollTrigger: {
                trigger: ".highlight-title"
            }
        })
        gsap.from(".highlight-text", {
            y: 40,
            duration: .6,
            delay: .5,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".highlight-text"
            }
        })
    })

    useGSAP(() => {
       gsap.to(".ball-container",{
        y:-50,
        opacity:1,
        scale:1,
        border:"10px solid blue",
        scrollTrigger:{
            trigger:".ball-container",
        }
       })
       
       gsap.to(".ball-container",{
        width:"250px",
        border:"0px",
        delay:1,
        scrollTrigger:{
            trigger:".ball-container",
        }
       })
       gsap.to(".ball-container",{
        background:'transparent',
        delay:1.6,
        scrollTrigger:{
            trigger:".ball-container",
        }
       })
       gsap.to(".ball-1",{
        opacity:1,
        delay:1.5,
        scrollTrigger:{
            trigger:".ball-1"
        }
       })
       gsap.to(".ball-2",{
        opacity:1,
        delay:1.5,
        scrollTrigger:{
            trigger:".ball-1"
        }
       })
       
    })

    return (
        <div className='highlight-container' >
            <div className='highlight-header' >
                <h1 className='highlight-title'>Get the highlights.</h1>
                <div className='header-small-text-container'>
                    <p className='highlight-text'>watch the film <FontAwesomeIcon icon={faCirclePlay} /></p>
                    <p className='highlight-text'>watch the film <FontAwesomeIcon icon={faAngleRight} /></p>
                </div>
            </div>
            <VideoCrousel />
            <div className='highlight-anime-ball-container' >
                <div className='ball-container' >
                    <div className='ball-1' >
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div>
                    <div className='ball-2' >
                        <FontAwesomeIcon icon={faRotateRight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlight
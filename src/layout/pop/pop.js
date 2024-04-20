import React from 'react'
import "./pop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

function Pop({title,width}) {

    useGSAP(() => {
        gsap.to(".pop-title", {
            opacity: 1,
            duration:.1,
            scrollTrigger: {
                trigger: ".pop-title",
                scrub:1,
                start:"bottom 80%",
                end:"bottom 80%",
            }
        })
        gsap.to(".btn-plus", {
            opacity: 1,
            duration: .1,
            delay: 1.5,
            scrollTrigger: {
                trigger: ".btn-plus",
                scrub:1,
                start:"bottom 80%",
                end:"bottom 80%",
            }
        })
        gsap.from(".pop-container", {
            y: 60,
            duration: .5,
            opacity:0,
            scrollTrigger: {
                trigger: ".pop-container",
                start:"top 90%",
                end:"top 90%",
                scrub:1.7
            }
        })
        gsap.to(".pop-container", {
            width: `300px`,
            duration: .6,
            delay: 2,
            scrollTrigger: {
                trigger: ".pop-container",
                scrub:2,
                start:"top 85%",
                end:"top 85%",
            }
        })
    })

    return (
        <div className='pop-container'>
            <h1 className='pop-title'>{title}</h1>
            <div className='btn-plus'>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    )
}

export default Pop
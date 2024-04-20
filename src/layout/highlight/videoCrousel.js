import React from 'react'
import "./highlight.css"

function VideoCrousel() {

    return (
        <div className='video-crousel-container' >
            <div className='slider' >
                <div className='video-slider-container' >
                    <video autoPlay muted loop>
                        <source src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-chip/large_2x.mp4' ></source>
                    </video>
                    <div className='video-text' >
                        <h1>Enter A17 pro.</h1>
                        <h1>Game-changing chip</h1>
                        <h1>Groundbreaking performence.</h1>
                    </div>
                </div>
                <div className='video-slider-container' >
                    <video autoPlay muted loop>
                        <source src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-titanium/large_2x.mp4' ></source>
                    </video>
                    <div className='video-text' >
                        <h1>Titanium.</h1>
                        <h1>So strong. So light. So pro.</h1>
                    </div>
                </div>
                <div className='video-slider-container' >
                    <video autoPlay muted loop>
                        <source src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-zoom/large_2x.mp4' ></source>
                    </video>
                    <div className='video-text' >
                        <h1>iPhone 15 Pro Max has the </h1>
                        <h1>longest optical zoom in </h1>
                        <h1>iPhone ever. Far out.</h1>
                    </div>
                </div>
                <div className='video-slider-container' >
                    <video autoPlay muted loop>
                        <source src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-action-button/large_2x.mp4' ></source>
                    </video>
                    <div className='video-text' >
                        <h1>All-new Action button. </h1>
                        <h1>What will yours do?</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCrousel
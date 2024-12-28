import React from 'react'
import '../assets/css/common.css'
import '../assets/css/home.css'
import pixelBotIcon from '../assets/images/pixelbot-icon.svg'


export default function Home() {
    return (

        <>
            <div className='text-center py-5 text-uppercase'>
                <div className='text-sz py-3'><img src={pixelBotIcon} className="logo" alt="pixel bot icon" /> Pixel With Purpose, Future in Focus.</div>

                <marquee className='h5 py-5 text-danger'>
                    We are a full-service creative studio creating beautiful digital experiences and products. Our mission is to make work process meaningful.
                </marquee>
            </div>

        </>

    )
}

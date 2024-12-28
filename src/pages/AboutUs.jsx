import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../assets/css/common.css'

export default function AboutUs() {
    return (
        <>
            <div className='container home-container'>
                <div className='row'>
                    <div className='bg-color p-3 content-height' >
                        <h1 className='fw-bold py-3'>
                            ABOUT US
                        </h1>
                        <div className='display-5 py-3 lh-base text-start'>
                            <b className='fs-2'>About StudioWe </b>
                            believe in fostering creativity and innovation, equipping our students with practical skills to excel in a fast-changing digital world. With expert instructors, real-world projects, and personalized guidance, we ensure our learners are industry-ready from day one.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

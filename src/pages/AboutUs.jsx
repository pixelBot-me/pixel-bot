import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function AboutUs() {
    return (
        <>
            <Container className='home-container'>
               <Row>
               <div className='text-center py-5 '>
                    <div className='display-5 py-3 text-start'>
                    <b className='fs-2'>About StudioWe </b>
                        believe in fostering creativity and innovation, equipping our students with practical skills to excel in a fast-changing digital world. With expert instructors, real-world projects, and personalized guidance, we ensure our learners are industry-ready from day one.
                    </div>

                </div>
               </Row>

            </Container>
        </>
    )
}

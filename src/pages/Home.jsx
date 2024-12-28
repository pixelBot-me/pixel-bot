import React from 'react';
import '../assets/css/common.css';
import '../assets/css/home.css';
import pixelBotIcon from '../assets/images/pixelbot-icon.svg';
import { Container, Row } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <Container className="home-container w-100">  {/* Set full viewport height container */}
                <Row className="">
                    <div className="text-center py-5 text-uppercase w-100">
                        <div className="text-sz py-3 text-start">
                            <img src={pixelBotIcon} className="logo1" alt="pixel bot icon" />
                            Pixel With Purpose, Future in Focus.
                        </div>

                        <marquee className="h5 py-5 text-danger">
                            We are a full-service creative studio creating beautiful digital experiences and products. Our mission is to make work process meaningful.
                        </marquee>
                    </div>
                </Row>
            </Container>
        </>
    );
}

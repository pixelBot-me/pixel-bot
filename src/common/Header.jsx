import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css';
import pixelBotLogo from '../assets/images/pixelbot-logo.svg';

export default function Header() {
    const [scroll, setScroll] = useState(false);

    // Scroll event handler
    const handleScroll = () => {
        if (window.scrollY > 70) {
            setScroll(true); // Set the scroll state to true after scrolling 70px
        } else {
            setScroll(false); // Reset when scrolling back up
        }
    };

    // Adding the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`header-bg py-5 sticky-top ${scroll ? 'scrolled' : ''}`}>
                <Container>
                    <Navbar.Brand href="#"> <img src={pixelBotLogo} className="logo" alt="pixel bot logo" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link className="fw-bold ">
                                <Link to={'/'} className="fw-bold text-white text-decoration-none"> HOME</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="fw-bold"> <Link to={'/about-us'} className="fw-bold text-white text-decoration-none"> ABOUT</Link></Nav.Link>
                            <NavDropdown title="COURSES" id="collapsible-nav-dropdown" className="fw-bold">
                                <NavDropdown.Item href="#action/3.1">Graphic Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">UI/UX Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Web Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Digital Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Motion Graphics & Video/Audio Editing</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets" className='fw-bold'> <Link to={'/contact-us'} className="fw-bold text-white text-decoration-none"> CONTACT</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

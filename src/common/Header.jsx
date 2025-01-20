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
    const [expanded, setExpanded] = useState(false); // To track navbar toggle state

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

    // Close the navbar when a link is clicked
    const handleNavLinkClick = () => {
        setExpanded(false);
    };

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={`header-bg py-5 sticky-top shadow ${scroll ? 'scrolled' : ''}`}
                expanded={expanded}
            >
                <Container>
                    <Navbar.Brand href="#">
                        <Link to="/" className="fw-bold text-white text-decoration-none">
                            <img src={pixelBotLogo} className="logo" alt="pixel bot logo" />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => setExpanded(!expanded)}

                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link className="fw-bold">
                                <Link
                                    to="/"
                                    className="fw-bold text-white text-decoration-none"
                                    onClick={handleNavLinkClick}
                                >
                                    HOME
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="fw-bold">
                                <Link
                                    to="/about-us"
                                    className="fw-bold text-white text-decoration-none"
                                    onClick={handleNavLinkClick}
                                >
                                    ABOUT
                                </Link>
                            </Nav.Link>
                            <NavDropdown
                                title="COURSES"
                                id="collapsible-nav-dropdown"
                                className="fw-bold"
                            >
                                <NavDropdown.Item href="/graphic-design">Graphic Design</NavDropdown.Item>
                                <NavDropdown.Item href="/ui-ux-design">UI/UX Design</NavDropdown.Item>
                                <NavDropdown.Item href="/web-design">Web Design</NavDropdown.Item>
                                <NavDropdown.Item href="/digital-marketing">Digital Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="/motion-graphics">Motion Graphics & Video/Audio Editing</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="fw-bold">
                                <Link
                                    to="/contact-us"
                                    className="fw-bold text-white text-decoration-none"
                                    onClick={handleNavLinkClick}
                                >
                                    CONTACT
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

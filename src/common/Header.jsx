import React from 'react'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css'
// import '../assets/css/common.css'

import pixelBotLogo from '../assets/images/pixelbot-logo.svg'


export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="header-bg">
                <Container>
                    <Navbar.Brand href="#"> <img src={pixelBotLogo} className="logo" alt="pixel bot logo" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className="fw-bold ">HOME</Nav.Link>
                            <Nav.Link href="#pricing" className="fw-bold">ABOUT</Nav.Link>
                            <NavDropdown title="COURSES" id="collapsible-nav-dropdown" className="fw-bold">
                                <NavDropdown.Item href="#action/3.1" >Graphhic Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    UI/UX Design
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Web Design</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action/3.4">
                                    Digital Marketing
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                   Motion Graphics & Video/Audio Editing
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets" className='fw-bold'>CONTACT </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

import React from 'react'
import '../assets/css/common.css'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';  // Importing social media icons from react-icons
import { Button } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <footer class="footer header-bg py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 mt-4 col-lg-4 text-center text-sm-start">
                            <div class="information">
                                <h6 class="footer-heading text-uppercase text-white fw-bold">courses</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">Graphic Design</a></li>
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">UI/UX Design</a></li>
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">Web Design</a></li>
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">Degital Marketing</a></li>
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">Motion Graphics & Video/Audio Editing</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div class="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div class="resources">
                                <h6 class="footer-heading text-uppercase text-white fw-bold">Resources</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">API</a></li>
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">Website Tutorials</a></li>
                                    <li class="mb-1"><a href="#r" class="text-white text-decoration-none fw-semibold">Third Party</a></li>
                                    <li class=""><a href="#r" class="text-white text-decoration-none fw-semibold">Video Lectures</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div class="col-sm-6 col-md-4 mt-4 col-lg-4 text-center text-sm-start">
                            <div class="social">
                                <h6 class="footer-heading text-uppercase text-white fw-bold">Social links</h6>
                                <ul class="list-inline my-4">
                                    <Button variant="primary" className="mx-2" href="https://facebook.com/yourprofile" target="_blank">
                                        <FaFacebook size={20} />
                                    </Button>
                                    <Button variant="danger" className="mx-2">
                                        <FaInstagram size={20} color="" />
                                    </Button>
                                    <Button variant="" className="mx-2 bg-white" >
                                        <FaYoutube size={20} color="" />
                                    </Button>
                                    <Button variant="info" className="mx-2">
                                        <FaLinkedin size={20} color="#0e76a8" />
                                    </Button>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
                            <div class="contact">
                                <h6 class="footer-heading text-uppercase text-white fw-bold">Contact Us</h6>
                                <address class="mt-4 m-0 text-white mb-1"><i class="bi bi-pin-map fw-semibold"></i> New South Block , Phase 8B , 160055</address>
                                <a href="tel:+" class="text-white mb-1 text-decoration-none d-block fw-semibold"><i class="bi bi-telephone"></i>  +91-9503309555  |  +91-8208498358</a>
                                <a href="mailto:" class="text-white mb-1 text-decoration-none d-block fw-semibold"><i class="bi bi-envelope"></i> help@thepixelbot.com</a>
                            </div>
                        </div>
                    </div>
                </div>
              
            </footer>
        </>
    )
}

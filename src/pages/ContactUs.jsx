import React from 'react'
import '../assets/css/contact.css'
import '../assets/css/common.css'

export default function ContactUs() {
    return (
        <>

            <div class="container home-container">
                <div class="bg-light">
                    <div class="row">
                        <div class="col-lg-8 col-md-12 p-5 bg-white rounded-3">
                           
                            <form class="row mb-3">
                                <div class="col-md-6 p-3">
                                    <input required placeholder="first name" type="text" name="" id="" />
                                </div>
                                <div class="col-md-6 p-3">
                                    <input required placeholder="last name" type="text" name="" id="" />
                                </div>
                                <div class="col-md-6 p-3">
                                    <input required placeholder="E-mail" type="email" name="" id="" />
                                </div>
                                <div class="col-md-6 p-3">
                                    <input required placeholder="phone" type="tel" name="" id="" />
                                </div>
                                <div class="col-md">
                                    <textarea required name="" placeholder="write your message" id="" cols="30" rows="1"></textarea>
                                </div>
                                <div class="text-end mt-4">
                                    <input class="btn px-4 py-3 btn-outline-dark" type="submit" value="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4 col-md-12 text-white aside px-4 py-5">
                            <div class="mb-5">
                                <h1 class="h3">Contact Information</h1>
                                <p class="opacity-50">
                                    <small>
                                    We’re open to talk to good people. Just say hello and we’ll start a productive cooperation.
                                    </small>
                                </p>
                            </div>
                            <div class="d-flex flex-column px-0">
                                <ul class="m-0 p-0">
                                    <li class="d-flex justify-content-start align-items-center mb-4">
                                        <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                                            <ion-icon name="call"></ion-icon>
                                        </span>
                                        <span>+91-8208498358</span>
                                    </li>
                                    <li class="d-flex align-items-center r mb-4">
                                        <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                                            <ion-icon name="mail"></ion-icon>
                                        </span>
                                        <span>help@thepixelbot.com</span>
                                    </li>
                                    <li class="d-flex justify-content-start align-items-center mb-4">
                                        <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                                            <ion-icon name="pin"></ion-icon>
                                        </span>
                                        <span>PixelBot Studio <br />
                                            Nagpur, Maharashtra
                                        </span>
                                    </li>
                                </ul>
                                {/* <div class="text-muted text-center">
                                    <code>
                                        Inspiration from :
                                        <a href="https://dribbble.com/shots/14126196-Contact-Form-01/attachments/5749555?mode=media">
                                            Erşad Başbağ
                                        </a></code>
                                    <br />
                                    <code>Created By : walid cherhane </code> <br />
                                    <code><a class="fs-3" href="https://codepen.io/walidcherhane" target="_blank">
                                        <ion-icon name="logo-codepen"></ion-icon>
                                    </a></code>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

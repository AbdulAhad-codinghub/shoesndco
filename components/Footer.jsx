import React from 'react'
import Image from 'next/image'
import { logo } from '../assets'
import { AiFillFacebook, AiFillInstagram, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineMessage, AiOutlinePhone, AiOutlineSend, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <ul>
                        <li><a href="https://www.facebook.com/shoesandco.pk/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://instagram.com/shoesandco.pk?igshid=YmMyMTA2M2Y=" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://wa.me/923229894490?text=" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                        <li><a href="mailto:shoesandco.pk@gmail.com"><i className="fa fa-envelope"></i></a></li>

                    </ul>
                </div>

                <div className="row" >
                    <ul style={{ fontSize: "large", fontFamily: 'fantasy' }}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/reviews">Reviews</Link></li>
                        <li><Link href="/">Shop Now</Link></li>
                    </ul>
                </div>

                <div className="row">
                    <ul>
                        SHOESNDCO © 2022 - All rights reserved</ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer

{/* <div>
<footer className="footer-section">
    <div className="container">
        <div className="footer-cta pt-5 pb-5">
            <div className="row">
                
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                    <AiOutlinePhone className='logo1'/>
                        <div className="cta-text">
                            <h4>Call us</h4>
                            <span>9876543210 0</span>
                        </div>
                        <div className="footer-logo">
                            <a href="index.html"><Image src={logo} className="img-fluid" alt="logo" width={200} height={200}/></a>
                        </div>
                        <div className="footer-text-f">
                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                            elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <AiOutlineMail className='logo1'/>
                        <div className="cta-text">
                            <h4>Mail us</h4>
                            <span>mail@info.com</span>
                        </div> 
                        <div className="footer-social-icon">
                            <span>Follow us</span>
                            <br/>
                            <br/>
                            <div className='sociall'>
                              <a href="#"><AiFillFacebook className='logo2' color='#4267B2' /></a>
                              <a href="#"><AiFillInstagram className='logo2' color='#C13584' /></a>
                              <a href="#"><AiOutlineWhatsApp className='logo2' color="green"/></a>           
                            </div>
                        </div>
                    </div>                  
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div className="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address"/>

                                <button><AiOutlineSend/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">                   
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div> */}

import React from "react";
import footerLogo from "../assets/images/footer_logo.png";
import i5 from "../assets/images/i5.png";
import i6 from "../assets/images/i6.png";
import i7 from "../assets/images/i7.png";
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 white_fonts">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="full">
                                        <img className="img-responsive" src={footerLogo} alt="#"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="full">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="full">
                                        <ul className="menu_footer">
                                            <li><NavLink to="/home">> Home</NavLink></li>
                                            <li><NavLink to="/about">> About</NavLink></li>
                                            <li><NavLink to="/exchange">> Exchange</NavLink></li>
                                            <li><NavLink to="/services">> Services</NavLink></li>
                                            <li><NavLink to="/news">> News</NavLink></li>
                                            <li><NavLink to="/contact">> Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="full">
                                        <div className="footer_blog full white_fonts">
                                            <h3>Newsletter</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                            <div className="newsletter_form">
                                                <form action="/home">
                                                    <input type="email" placeholder="Your Email" name="#" required=""/>
                                                    <button>Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="full">
                                        <div className="footer_blog full white_fonts">
                                            <h3>Contact us</h3>
                                            <ul className="full">
                                                <li><img src={i5}/><span>London 145<br/>United Kingdom</span>
                                                </li>
                                                <li><img src={i6}/><span>demo@gmail.com</span></li>
                                                <li><img src={i7}/><span>+12586954775</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="crp">© Copyrights 2020 design by volodymyrquo.design</p>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink to="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up"></i></NavLink>
        </>
    )


}

export default Footer;
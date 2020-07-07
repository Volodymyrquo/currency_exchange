import React from "react";
import loader from "../assets/images/loader.gif";
import slideImg from "../assets/images/slide_img.png";
import img3 from "../assets/images/img3.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import styles from "./Home.module.css"
import {NavLink} from "react-router-dom";


const Home = () => {
    return       (

        <div id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

     {  /* <!-- LOADER -->*/}
       {/* <div id="preloader">
            <div className="loader">
                <img src={loader} alt="#"/>
            </div>
        </div>*/}
{   /*     <!-- end loader -->
        <!-- END LOADER -->
.        <!-- Start Banner -->*/}
        <div className="ulockd-home-slider">
            <div className="container-fluid">
                <div className="row">
                    <div className="pogoSlider" id="js-main-slider">
                        <div className={`${styles.pogoSliderSlide} ${styles.backgroundClass}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slide_text white_fonts">
                                            <h3>Progress & Success<br/><strong>Currency</strong></h3>
                                            <br/>
                                                <NavLink className="start_exchange_bt" to="/exchange">Start Exchange
                                                    ></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.pogoSliderSlide} ${styles.backgroundClass}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slide_text white_fonts">
                                            <h3>Progress & Success<br/><strong>Currency</strong></h3>
                                            <br/>
                                                <NavLink className="start_exchange_bt" to="/exchange">Start Exchange
                                                    ></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  { /* <!-- .pogoSlider -->*/}
            </div>
            </div>
        </div>
      { /* <!-- End Banner -->

        <!-- section -->*/}
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="full text_align_right_img">
                            <img src={img1} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6 layout_padding">
                        <div className="full paddding_left_15">
                            <div className="heading_main text_align_left">
                                <h2><span className="theme_color">Welcome</span> To Exchange</h2>
                            </div>
                        </div>
                        <div className="full paddding_left_15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum</p>
                        </div>
                        <div className="full paddding_left_15">
                            <a className="main_bt" href="#">About more ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     {/*   <!-- end section -->
        <!-- section -->*/}
        <div className="section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="heading_main text_align_center">
                                <h2><span className="theme_color"></span>Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="full services_blog">
                            <img className="img-responsive" src={s1} alt="#"/>
                            <h4>Safe & Secure</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="full services_blog">
                            <img className="img-responsive" src={s2} alt="#"/>
                            <h4>Mobile Apps</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="full services_blog">
                            <img className="img-responsive" src={s3} alt="#"/>
                            <h4>Wallet</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="full services_blog">
                            <img className="img-responsive" src={s4} alt="#"/>
                            <h4>Experts Support</h4>
                        </div>
                    </div>
                </div>
                <div className="row margin-top_30">
                    <div className="col-sm-12">
                        <div className="full">
                            <div className="center">
                                <a className="main_bt" href="#">About more ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*        <!-- end section -->
        <!-- section -->*/}
        <div className="section white_fonts" style={{background: "#2a2a2a"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{background: "#fff"}}>
                        <div className="full text_align_right_img">
                            <img src={img2} alt="#"/>
                        </div>
                    </div>
                    <div className="col-md-6 layout_padding">
                        <div className="full paddding_left_15">
                            <div className="heading_main text_align_left">
                                <h2><span className="theme_color">Apply for</span> Exchange</h2>
                            </div>
                        </div>
                        <div className="full paddding_left_15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum</p>
                        </div>
                        <div className="full paddding_left_15">
                            <a className="main_bt" href="#">Exchange ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*        <!-- end section -->
        <!-- section -->*/}
        <div className="section layout_padding about_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="full paddding_left_15">
                            <div className="heading_main text_align_left">
                                <h2>About</h2>
                            </div>
                        </div>
                        <div className="full paddding_left_15">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum</p>
                        </div>
                        <div className="full paddding_left_15">
                            <a className="main_bt" href="#">Read More ></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="full text_align_right_img">
                            <img src={img3} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*        <!-- end section -->
        <!-- section -->*/}
        <div className="section layout_padding padding_top_0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="heading_main text_align_center">
                                <h2><span className="theme_color"></span>News</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="full news_blog">
                            <img className="img-responsive" src={b1} alt="#"/>
                            <div className="overlay"><a className="main_bt transparent" href="#">View</a></div>
                            <div className="blog_details">
                                <h3>Bitcoin News</h3>
                                <p>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="full news_blog">
                            <img className="img-responsive" src={b2} alt="#"/>
                            <div className="overlay"><a className="main_bt transparent" href="#">View</a></div>
                            <div className="blog_details">
                                <h3>Ethereum News</h3>
                                <p>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="full news_blog">
                            <img className="img-responsive" src={b3} alt="#"/>
                            <div className="overlay"><a className="main_bt transparent" href="#">View</a></div>
                            <div className="blog_details">
                                <h3>Light News</h3>
                                <p>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 {/*       <!-- end section -->
        <!-- section -->*/}
        <div className="section layout_padding padding_top_0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="heading_main text_align_center">
                                <h2><span className="theme_color"></span>Contact</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 {  /*     <!-- end section -->
        <!-- contact_form -->*/}
        <div className="section contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 offset-lg-3">
                        <div className="full">
                            <form className="contact_form_inner" action="#">
                                <fieldset>
                                    <div className="field">
                                        <input type="text" name="name" placeholder="Your name"/>
                                    </div>
                                    <div className="field">
                                        <input type="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="field">
                                        <input type="text" name="phone_no" placeholder="Phone number"/>
                                    </div>
                                    <div className="field">
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                    <div className="field center">
                                        <button>SEND</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 { /*      <!-- end contact_form -->
        <!-- end section -->*/}
        </div>
)



}

export default Home;
import React from "react";
import loader from "../assets/images/loader.gif";
import img3 from "../assets/images/img3.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";


const About = () => {
    return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">


           {/* <div id="preloader">
                <div className="loader">
                    <img src={loader} alt="#"/>
                </div>
            </div>*/}
            {/*        <!-- end loader -->
                    <!-- END LOADER -->

                    <!-- Start Banner -->*/}
            <div className="section inner_page_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner_title">
                                <h3>About us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         {   /*     <!-- End Banner -->

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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id
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
           { /*  <!-- end section -->

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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id
                                    est laborum</p>
                            </div>
                            <div className="full paddding_left_15">
                                <a className="main_bt" href="#">About more ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {  /*      <!-- end section -->

                  <!-- section -->*/}
            <div className="section white_fonts" style={{background: "#111"}}>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id
                                    est laborum</p>
                            </div>
                            <div className="full paddding_left_15">
                                <a className="main_bt" href="#">Exchange ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

)



}

export default About;
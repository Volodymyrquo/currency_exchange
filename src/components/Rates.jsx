import React from "react";
import loader from "../assets/images/loader.gif";
import img1 from "../assets/images/img1.png";
import {ratesAPI} from "../api/Api";


const Rates = () => {
    return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

{/*        <!-- LOADER -->
        <div id="preloader">
            <div className="loader">
                <img src="images/loader.gif" alt="#"/>
            </div>
        </div>
        <!-- end loader -->
        <!-- END LOADER -->

        <!-- Start header -->*/}



      {/*  <!-- Start Banner -->*/}
        <div className="section inner_page_banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner_title">
                            <h3>Exchange</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     {/*   <!-- End Banner -->

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
                                <h2><span className="theme_color">Exchange</span> your currency</h2>
                            </div>
                        </div>
                        <div className="full paddding_left_15">
                           <div>EUR/USD = </div> <div> {ratesAPI.latestRate("USD").then(response => response.data)} </div>
                        </div>
                        <div className="full paddding_left_15">
                            <a className="main_bt" href="#">Exchange Currency ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Rates;
import React from "react";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";


const Services = () => {
    return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

       {/*<Preloader/>*/}



 {/*       <div className="section inner_page_banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner_title">
                            <h3>Services</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}


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
                </div>
                <div className="row margin-top_30">
                    <div className="col-sm-12">
                        <div className="full">
                            <div className="center">
                                <a className="main_bt" href="#">See More ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


        )
}

export default Services;
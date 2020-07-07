import React from "react";
import loader from "../assets/images/loader.gif";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";


const News = () => {
    return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

      {/*  <!-- LOADER -->
        <div id="preloader">
            <div className="loader">
                <img src="images/loader.gif" alt="#"/>
            </div>
        </div>
        <!-- end loader -->
        <!-- END LOADER -->*/}


       {/* <!-- Start Banner -->*/}
        <div className="section inner_page_banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner_title">
                            <h3>News</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     {/*   <!-- End Banner -->

        <!-- section -->*/}
        <div className="section layout_padding">
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
        </div>

)

}

export default News;
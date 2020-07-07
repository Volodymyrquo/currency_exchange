import React from "react";
import loader from "../assets/images/loader.gif";
import styles from "./Contact.module.css"


const Contact = () => {
    return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

{/*
        <!-- LOADER -->
        <div id="preloader">
            <div className="loader">
                <img src="images/loader.gif" alt="#"/>
            </div>
        </div>
        <!-- end loader -->
        <!-- END LOADER -->
*/
}
       {/* <!-- Start Banner -->*/}
        <div className="section inner_page_banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner_title">
                            <h3>Contact</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* <!-- End Banner -->

        <!-- section -->*/}
        <div className="section layout_padding">
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
     {/*   <!-- end section -->

        <!-- contact_form -->*/}
        <div className={`${styles.section} ${styles.contact_form}`}>
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
        </div>
)



}

export default Contact;
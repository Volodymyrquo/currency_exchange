import React from "react";
import slideImg from "../assets/images/slide_img.png";


const Slider = () => {
    return       (
        <div className="ulockd-home-slider">
            <div className="container-fluid">
                <div className="row">
                    <div className="pogoSlider" id="js-main-slider">
                        <div className="pogoSlider-slide" style={{backgroundImage: "url(" + {slideImg} + ")"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slide_text white_fonts">
                                            <h3>Progress & Success<br/><strong>Currency</strong></h3>
                                            <br/>
                                            <a className="start_exchange_bt" href="exchange.html">Start Exchange ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pogoSlider-slide" style={{backgroundImage: "url(" + {slideImg} + ")"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="slide_text white_fonts">
                                            <h3>Progress & Success<br/><strong>Currency</strong></h3>
                                            <br/>
                                            <a className="start_exchange_bt" href="exchange.html">Start Exchange ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/              <!-- .pogoSlider -->*/}
                </div>
            </div>
        </div>

    )



}

export default Slider;
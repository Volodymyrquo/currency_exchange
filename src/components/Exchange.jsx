import React from "react";
import loader from "../assets/images/loader.gif";
import img1 from "../assets/images/img1.png";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrencyRate} from "../redux/exchange-reducer";
import Preloader from "./common/preloader/Preloader";


const Exchange = (props) => {
    return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

{/*<Preloader/>*/}


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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum</p>
                        </div>
                        <div className="full paddding_left_15">
                            <NavLink className="main_bt" to="/rates">Exchange Currency ></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        base: state.exchange.base,
        date: state.exchange.date,
        rates: state.exchange.rates
    }
)
export default connect(mapStateToProps, {setCurrencyRate})(Exchange);
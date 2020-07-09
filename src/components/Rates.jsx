import React, {useEffect} from "react";
import loader from "../assets/images/loader.gif";
import img1 from "../assets/images/img1.png";
import styles from "./Rates.module.css"
import {setCurrencyRate} from "../redux/exchange-reducer";
import {connect} from "react-redux";


const Rates = (props) => {
    useEffect(() => {
        props.setCurrencyRate()
    });
    let tableArray = [];

    for (let key in props.rates) {
        tableArray.push(<tr>
            <td>EUR/{key}</td>
            <td>{(Math.round(props.rates[key] * 10000) / 10000).toFixed(4)}</td>
        </tr>)

    }
    return (
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
                                <table className={styles.table}
                                       border={"1"} cellPadding={"5"}
                                       bordercolor={"#ff880e"} cols={"2"} align={"center"}>
                                    <th width={"50%"}>Currency</th>
                                    <th>Rate</th>
                                    {tableArray}
                                </table>
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

const mapStateToProps = (state) => (
    {
        base: state.exchange.base,
        date: state.exchange.date,
        rates: state.exchange.rates
    }
)

export default connect(mapStateToProps, {setCurrencyRate})(Rates);
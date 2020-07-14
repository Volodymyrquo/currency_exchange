import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setCryptoExchanges} from "../redux/cryptoexchanges-reducer";


const Cryptoexchanges = (props) => {
    useEffect(() => {
        props.setCryptoExchanges()
    });

      return       (
        <div id="inner_page" data-spy="scroll" data-target="#navbar-wd" data-offset="98">

          {/*  <Preloader/>*/}

        <div className="section inner_page_banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner_title">
                            <h3>Crypto Exchanges</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="heading_main text_align_center">
                                <h2><span className="theme_color"></span>Crypto Exchanges</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.exchanges.map(item => <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="full services_blog">
                            <img className="img-responsive" src={item.logo} alt="#"/>
                            <h4>{item.exchange}</h4>
                        </div>
                    </div>)}
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
const mapStateToProps = (state) => ({
    exchanges: state.cryptoExchanges.exchanges
    })

export default connect(mapStateToProps, {setCryptoExchanges})(Cryptoexchanges);
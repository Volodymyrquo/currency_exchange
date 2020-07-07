import React from "react";
import logoImage from "../assets/images/logo.png";
import mailIcon from "../assets/images/mail_icon.png";
import phoneIcon from "../assets/images/phone_icon.png";
import searchIcon from "../assets/images/search_icon.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="top-header">
            <div className="header_top">

                <div className="container">
                    <div className="row">
                        <div className="logo_section">
                            <NavLink className="navbar-brand" to="/home"><img src={logoImage} alt="image"/></NavLink>
                        </div>
                        <div className="site_information">
                            <ul>
                                <li><a href="mailto:exchang@gmail.com"><img src={mailIcon}
                                                                            alt="#"/>exchang@gmail.com</a></li>
                                <li><a href="tel:exchang@gmail.com"><img src={phoneIcon} alt="#"/>+7123569847</a></li>
                                <li><a className="join_bt" href="#">Join us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="header_bottom">
                <div className="container">
                    <div className="col-sm-12">
                        <div className="menu_orange_section" style={{background: "#ff880e"}}>
                            <nav className="navbar header-nav navbar-expand-lg">
                                <div className="menu_section">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                                        <ul className="navbar-nav">
                                            <li><NavLink to={"/home"} className="nav-link active" >Home</NavLink></li>
                                            <li><NavLink to={"/about"} className="nav-link" >About</NavLink></li>
                                            <li><NavLink to={"/exchange"} className="nav-link" >Exchange</NavLink></li>
                                            <li><NavLink to={"/services"} className="nav-link" >Services</NavLink></li>
                                            <li><NavLink to={"/news"} className="nav-link" >News</NavLink></li>
                                            <li><NavLink to={"/contact"} className="nav-link" >Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="search-box">
                                <input type="text" className="search-txt" placeholder="Search"></input>
                                <a className="search-btn">
                                    <img src={searchIcon} alt="#"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    )
}

export default Header;
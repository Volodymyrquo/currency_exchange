import React from "react";
import loader from "../../../assets/images/loader.gif"

const Preloader = () => {
    return (

        <div>
            <div className="loader">
                <img src={loader} alt="#"/>
            </div>
        </div>

    )
}

export default Preloader;
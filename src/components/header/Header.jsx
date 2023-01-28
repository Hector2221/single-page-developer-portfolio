import React from "react";
import "./header.css"
import Linkedin from "../../assets/titter.svg"
import github from "../../assets/Path.svg"
import shape from "../../assets/github.svg"
import twitter from "../../assets/Path (1).svg"

export const Header = () => {
    return(
        <div className="header content">
            <h1 className="tittle">adamkeyes</h1>
            <div className="networks">
                <img src={github} alt="github" />
                <img src={shape} alt="" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={twitter} alt="twitter" />
            </div>
        </div>
    )
}
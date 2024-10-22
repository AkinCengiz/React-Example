import React, { Component } from "react";
import Logo from "../../images/logo192.png";
import DateTime from "../date-time/DateTime";
import "./Header.css";

class Header extends Component {
    constructor(){
        super();
        this.state = {
            title : "YMYP React Intro",
            date : "",
            time : ""
        }
    }

    timeShow = setInterval(
        () => {
            this.setState(
                {
                    time: new Date().toLocaleTimeString(),
                    date: new Date().toLocaleDateString()
                })
        }, 1000
    );

    render() {
        return (
            <header className="header">
                    <img className="header-logo" src={Logo} alt="logo" />
                    <p className="header-title">{this.state.title}</p>
                    <DateTime />
            </header>
        );
    }
};

export default Header;  
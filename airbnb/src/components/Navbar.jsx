import React from "react";
import logo from '../assets/airbnbLogo.png'
export default function Navbar(){
    return (
        <nav>
            <img
                className="nav--logo"
                src={logo}
            />
        </nav>
    )
}
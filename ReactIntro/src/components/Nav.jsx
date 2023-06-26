import logo from '../assets/logo-white-bg.png'
import React from "react"
import ReactDOM from "react-dom"

export default function Nav() {
    return (
        <nav>
            <img
                className='logo'
                src={logo}
            />
            <h2 className='title'>ReactFacts</h2>
            <h3 className='right-title'>React Course - Project 1</h3>
        </nav>
    )
}
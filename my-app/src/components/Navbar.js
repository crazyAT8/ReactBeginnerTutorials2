import React from "react"
import reactLogo from "../images/ReactImage.png"

export default function Navbar() {
    return (
        <nav>
            <img
                src={reactLogo}
                alt="React Logo"
                className="nav--icon"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project </h4>
        </nav>
    )
}
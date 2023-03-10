import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(){
    return (
        <nav className = "navbar">
            <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" />
            <h1 className = "nav--title">My travel Journal.</h1>
        </nav>
    )
}
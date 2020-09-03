import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <img src="cutie.png" />
            </Link>
            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/Projects">
                    Projects
                </Link>
                <Link to="/AboutUs">
                    AboutUs
                </Link>
                <Link to="/ContactUs">
                    ContactUs
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
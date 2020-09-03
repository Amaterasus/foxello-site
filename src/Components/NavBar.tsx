import React from "react"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default NavBar
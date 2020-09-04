import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="cutie.png" />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>
      </div>
      <FontAwesomeIcon icon={faFacebook} />
    </nav>
  );
};

export default NavBar;

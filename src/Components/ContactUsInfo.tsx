import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactUsContent } from "../utilities/Strings";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactUsInfo = () => {
  return (
    <div className="contactUsInfo">
      <h2>{contactUsContent.infoHeading}</h2>
      <div>
        <a
          href="mailto:amy.franz@gmail.com?subject=Foxello%20Design%20Enquiry&body=Hi,%0D%0A%0D%0AI%20would%20like%20to%20enquire%20about%20Foxello's%20services.%0D%0A%0D%0AThanks"
          className="contactLink1"
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} className="icon" />
          <h3>{contactUsContent.link1}</h3>
        </a>
        <a href="" className="contactLink2">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <h3>{contactUsContent.link2}</h3>
        </a>
        <a href="" className="contactLink3">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          <h3>{contactUsContent.link3}</h3>
        </a>
        <a href="" className="contactLink4">
          <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
          <h3>{contactUsContent.link4}</h3>
        </a>
      </div>
    </div>
  );
};

export default ContactUsInfo;

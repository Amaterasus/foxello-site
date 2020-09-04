import React from "react";
import { homeContent } from "../utilities/Strings";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <div className="serviceHeading">
        <h2>{homeContent.serviceHeadingH2}</h2>
        <h3>{homeContent.serviceHeadingH3}.</h3>
      </div>
      <div className="servicesDisplay">
        <div className="servicesIndex">
          <Link className="services1" to="">
            <img alt="" />
            <h5>{homeContent.service1}</h5>
          </Link>
          <Link className="services2" to="">
            <img alt="" />
            <h5>{homeContent.service2}</h5>
          </Link>
          <Link className="services3" to="">
            <img alt="" />
            <h5>{homeContent.service3}</h5>
          </Link>
        </div>
        <div className="servicesBar"></div>
      </div>
    </div>
  );
};

export default Services;

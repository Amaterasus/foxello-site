import React from "react";
import { homeContent } from "../utilities/Strings";
import { Link } from "react-router-dom";

const CTAHome1 = () => {
  return (
    <Link className="CTAHome1" to="">
      <h2>{homeContent.CTA1}.</h2>
    </Link>
  );
};

export default CTAHome1;

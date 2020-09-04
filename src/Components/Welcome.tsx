import React from "react";
import { homeContent } from "../utilities/Strings";

const Welcome = () => {
  return (
    <div className="welcome">
      <img />
      <p>{homeContent.headingPTag}</p>
      <h2>{homeContent.headingH2Tag}</h2>
    </div>
  );
};

export default Welcome;

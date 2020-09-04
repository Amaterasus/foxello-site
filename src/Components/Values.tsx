import React from "react";
import { homeContent } from "../utilities/Strings";

const Values = () => {
  return (
    <div className="value">
      <div className="shapes">
        <div className="squares">
          <div className="square1"></div>
          <div className="square2"></div>
        </div>
        <div className="circles">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
      <div className="values">
        <h2 className="value1">{homeContent.value1}.</h2>
        <h2 className="value2">{homeContent.value2}.</h2>
        <h2 className="value3">{homeContent.value3}.</h2>
        <h2 className="value4">{homeContent.value4}.</h2>
      </div>
    </div>
  );
};

export default Values;

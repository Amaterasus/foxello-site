import React from "react";
import { aboutUsContent } from "../utilities/Strings";

const AboutTheCompany = () => {
  return (
    <div className="aboutTheCompany">
      <div className="aboutCompany">
        <h2 className="companyHeading">{aboutUsContent.companyH2}</h2>
        <p className="companyInfo">{aboutUsContent.companyInfo}</p>
      </div>
      <div className="aboutValues">
        <h2 className="valuesHeading">{aboutUsContent.valueH2}</h2>
        <p className="valuesInfo">{aboutUsContent.valueInfo}</p>
      </div>
      <div className="aboutMission">
        <h2 className="missionHeading">{aboutUsContent.missionH2}</h2>
        <p className="missionInfo">{aboutUsContent.missionInfo}</p>
      </div>
      <p className="companyName">{aboutUsContent.company}</p>
    </div>
  );
};

export default AboutTheCompany;

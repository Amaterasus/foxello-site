import React from "react";
import { aboutUsContent } from "../utilities/Strings";

const AboutThePeople = () => {
  return (
    <div className="aboutThePeople">
      <h2 className="aboutUsHeading">{aboutUsContent.aboutPeopleHeading}</h2>
      <div className="person1">
        <div className="personHeading">
          <img src="" alt="" />
          <h3>{aboutUsContent.person1Heading}</h3>
        </div>
        <p className="personInfo">{aboutUsContent.person1Info}</p>
      </div>
      <div className="person2">
        <div className="personHeading">
          <img src="" alt="" />
          <h3>{aboutUsContent.person2Heading}</h3>
        </div>
        <p className="personInfo">{aboutUsContent.person2Info}</p>
      </div>
    </div>
  );
};

export default AboutThePeople;

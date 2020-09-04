import React from "react";
import Welcome from "../Components/Welcome";
import CTAHome1 from "../Components/CTAHome1";
import Values from "../Components/Values";
import Services from "../Components/Services";
import CTAHome2 from "../Components/CTAHome2";

const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <CTAHome1 />
      <Values />
      <Services />
      <CTAHome2 />
    </div>
  );
};

export default Home;

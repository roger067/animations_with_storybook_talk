import React from "react";

import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import slides from "../components/slides";

const Presentation = () => (
  <AwesomeSlider
    startup
    fillParent
    animation="cubeAnimation"
    bullets={false}
    organicArrows={false}
  >
    {slides.map((slide, index) => (
      <div key={index}>{slide}</div>
    ))}
  </AwesomeSlider>
);

export default Presentation;

import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const Presentation = () => (
  <AwesomeSlider animation="cubeAnimation" bullets={false}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </AwesomeSlider>
);

export default Presentation;

import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am Moses Oyelade, I a code everyday with Moringa, my Technical mentor is Mr. Israel Prince</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;

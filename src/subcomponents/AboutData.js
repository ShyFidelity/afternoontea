
import React, { Component } from "react";
import Jillian from '../images/profpic2me.jpg'


import { render } from "react-dom";
import Plx from "react-plx";


const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: -500,
        property: "translateY",
      },
    ],
  },
];

const plxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 20,
  borderradius: 20, 

  position: "relative",
  width: "100%",
  height:500,
  width:320,
  flexDirection: "row",
};

const wrapperStyles = {
  position: "relative",
  height:450,
  
  overflow: "hidden",
  endValue: 500,
  properties: [
    {
      startValue: 0,
      endValue: -450,
      property: "translateY",
    },
  ]
};


const AboutData = () => {
  return (
    <div  >
      <div className="aboutData" style={{ height: 450, width: 320}}>
        <div style={wrapperStyles}>
          <Plx parallaxData={exampleParallaxData} style={plxStyles}>
          <p className="jillian">Hi! I'm Jillian, a dynamic artist, UI/UX developer, and front-end builder who thrives on pushing creative boundaries. I'm passionate about crafting unique and engaging digital experiences that stand out from the status quo. Let's create something amazing together!</p>
          </Plx>
        </div>
      </div>
    
    </div>
  );
};

export default AboutData;




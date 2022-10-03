import React from "react";
import "./style.scss";
import jest from "../../assets/icons/jest.png";
import js from "../../assets/icons/js.png";
import react from "../../assets/icons/react.png";
import redux from "../../assets/icons/redux.png";
import rtl from "../../assets/icons/rtl.png";
import ts from "../../assets/icons/ts.png";
import three from "../../assets/icons/three.png";
import next from "../../assets/icons/next.png";
import node from "../../assets/icons/node.png";
import lambda from "../../assets/icons/lambda.png";
import webpack from "../../assets/icons/webpack.png";

const technologies = [
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "Typescript",
    icon: ts,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Testing Library",
    icon: rtl,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "AWS Lambda",
    icon: lambda,
  },
  {
    name: "ThreeJS",
    icon: three,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
];

const Technologies = () => (
  <div className="technologies-container">
    <div className="icons-wrapper">
      {technologies.map((tech) => {
        const { icon, name } = tech;
        return (
          <img
            src={icon}
            alt={name}
            title={name}
            key={name}
            height="48"
            className="icon"
          />
        );
      })}
    </div>
  </div>
);

export default Technologies;

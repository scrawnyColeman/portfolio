import React from "react";
import es6 from "../assets/icons/es6.png";
import jest from "../assets/icons/jest.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import react from "../assets/icons/react.png";
import rtl from "../assets/icons/rtl.png";
import sass from "../assets/icons/sass.png";
import redux from "../assets/icons/redux.png";
import springboot from "../assets/icons/springboot.png";
import mysql from "../assets/icons/mysql.png";
import java from "../assets/icons/java.png";
import next from "../assets/icons/next.png";
import lambda from "../assets/icons/lambda.png";
import node from "../assets/icons/node.png";
import ddb from "../assets/icons/ddb.png";
import gql from "../assets/icons/gql.png";
import styledcomponents from "../assets/icons/styledcomponents.png";

export const experience = [
  {
    type: "education",
    title: "Software Engineer",
    location: "Trilo",
    when: "July 2021 - Present",
    description: (
      <div className="edu-description">
        <ul>
          <li>
            Joined as a Frontend engineer but quickly transitioned to working
            across the stack. The philosophy at Trilo is <b>No solo, no silo</b>
            ; everybody works on all areas of the tech stack, and everybody can
            take ownership of full features from end to end.
          </li>
          <li>
            Have worked on everything from creating <b>Lambdas</b> to building
            up <b>Frontend web apps</b>, as well as scaffolding a{" "}
            <b>React Native App </b>
            from the ground up.
          </li>
          <li>
            Built a themed QR code generator using <b>node-canvas</b> and{" "}
            <b>AWS Lambda</b>
          </li>
          <li>
            Built a microservice for the creation of one-shot consumable URLs to
            be utilised in our payment journey using
            <b>AWS CDK</b>, <b>Lambda</b>, <b>NodeJS w/ Typescript</b> and{" "}
            <b>DynamoDB</b>
          </li>
          <li>
            Built out Frontend web apps from the ground up using <b>Next.js</b>.
            Examples includes both <b>static sites</b> with{" "}
            <b>static routing</b>, as well as
            <b> server side rendered</b> sites that utilise{" "}
            <b>dynamic routing</b>. Deployed to AWS using{" "}
            <b>Infrastructure-as-code</b>, per the <b>Serverless</b> framework.
          </li>
        </ul>
      </div>
    ),
    icons: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Next",
        icon: next,
      },
      {
        name: "Typescript",
        icon: ts,
      },
      {
        name: "JavaScript",
        icon: js,
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
        name: "SASS",
        icon: sass,
      },
      {
        name: "Styled-components",
        icon: styledcomponents,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Node.js",
        icon: node,
      },
      {
        name: "GraphQL",
        icon: gql,
      },
      {
        name: "Lambda",
        icon: lambda,
      },
      {
        name: "DynamoDB",
        icon: ddb,
      },
    ],
  },
  {
    type: "education",
    title: "Graduate Software Engineer",
    location: "AquaQ Analytics",
    when: "September 2020 - July 2021",
    description: (
      <div className="edu-description">
        Sole frontend engineer on a Greenfield internal supervisory system for a
        Tier 1 Investment Bank. Responsibilities include making architectural
        decisions regarding <b>componentisation</b>, data storage for{" "}
        <b>application state</b> and UI. Prioritising writing maintainable and
        reusable components, as well as using <b>abstraction</b> to make the
        codebase extensible, consistent, and maintainable. Used the following:
        <ul>
          <li>
            <b>ES6</b> (and beyond) syntax
          </li>
          <li>
            <b>Functional components</b> for their readability, code reduction
            and the benefits of utilising and creating hooks.
          </li>
          <li>
            <b>SASS</b> for CSS preprocessing
          </li>
          <li>
            <b>Redux</b> as a state management tool
          </li>
          <li>
            <b>React testing library</b> and <b>Jest</b> for unit testing
          </li>
        </ul>
      </div>
    ),
    icons: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "ES6",
        icon: es6,
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
        name: "SASS",
        icon: sass,
      },
      {
        name: "Redux",
        icon: redux,
      },
    ],
  },
  {
    type: "experience",
    title: "MSc Software Development",
    location: "Queen's University Belfast",
    when: "September 2019 - September 2020",

    description: (
      <div className="edu-description">
        <ul>
          <li>
            <b>Programming:</b> 91%
          </li>
          <li>
            <b>Web Development:</b> 82%
          </li>
          <li>
            <b>Dissertation (Web Project):</b> 85%
          </li>
          <li>
            <b>Databases:</b> 75%
          </li>
          <li>
            <b>Software Engineering:</b> 64%
          </li>
          <li>
            <b>Computing Foundations:</b> 87%
          </li>
        </ul>
      </div>
    ),
    icons: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Spring Boot",
        icon: springboot,
      },
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "Java",
        icon: java,
      },
    ],
  },
  {
    type: "experience",
    title: "BSc Economics",
    location: "Queen's University Belfast",
    when: "September 2016 - May 2019",
    description: (
      <div className="edu-description">
        Used computation to carry out regression models. From this point
        onwards, my interest in software grew. I began self teaching Javascript
        via Codecademy and other means during my Undergraduate.
        <ul>
          <li>
            <b>First-Class Honours</b> and graduated 3rd in my class
          </li>
          <li>
            <b>Mathematics:</b> Achieved 100%
          </li>
          <li>
            <b>Econometrics:</b> Achieved 74%. This module utilised STATA to
            create polynomial regression models for large datasets.
          </li>
        </ul>
      </div>
    ),
    icons: [],
  },
];

export default experience;

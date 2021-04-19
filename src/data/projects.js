import es6 from "../assets/icons/es6.png";
import jest from "../assets/icons/jest.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import react from "../assets/icons/react.png";
import vercel from "../assets/icons/vercel.png";
import firebase from "../assets/icons/firebase.png";
import rtl from "../assets/icons/rtl.png";
import redux from "../assets/icons/redux.png";
import springboot from "../assets/icons/springboot.png";
import mysql from "../assets/icons/mysql.png";
import java from "../assets/icons/java.png";
import styledcomponents from "../assets/icons/styledcomponents.png";

import njoy from "../assets/img/njoy-fib.png";
import burger from "../assets/img/burger.png";
import poke from "../assets/img/pokedex-screenshot.png";
export const projects = [
  {
    title: "'Njoy Learning",
    description: (
      <div>
        Dissertation project for the MSc Software Development. Includes:
        <ul style={{ padding: "1rem" }}>
          <li>Routing with react-router / react-router-dom</li>
          <li>Fetching from API, using axios</li>
          <li>API built using Spring Boot, pulling from MySQL DB</li>
          <li>Styled Components</li>
          <li>In built text editor, using react-ace</li>
          <li>Lesson carousel, with react-slick</li>
        </ul>
      </div>
    ),
    image: <img src={njoy} alt="njoy" height="312" className="project-img" />,
    deployment: "",
    github: "https://github.com/scrawnyColeman/reactfrontend",
    icons: [
      {
        name: "React",
        icon: react
      },
      {
        name: "Spring Boot",
        icon: springboot
      },
      {
        name: "JavaScript",
        icon: js
      },
      {
        name: "MySQL",
        icon: mysql
      },
      {
        name: "Java",
        icon: java
      },
      {
        name: "Styled-component",
        icon: styledcomponents
      }
    ]
  },
  {
    title: "Burger Builder",
    description: (
      <div>
        Burger Builder built whilst learning from a{" "}
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          target="blank"
        >
          Udemy course
        </a>
        <ul style={{ padding: "1rem" }}>
          <li>Routing with react-router / react-router-dom</li>
          <li>Fetching from Firebase BaaS and Firestore</li>
          <li>Styled Components / CSS Modules</li>
          <li>
            State management via Redux and Redux Thunk (also learned Context)
          </li>
          <li>Form validation</li>
        </ul>
      </div>
    ),
    image: (
      <img src={burger} alt="burger" height="312" className="project-img" />
    ),
    github: "https://github.com/scrawnyColeman/react-project-burgerbuilder",
    deployment: "https://react-my-burger-90b75.web.app/",
    icons: [
      {
        name: "React",
        icon: react
      },
      {
        name: "JavaScript",
        icon: js
      },
      {
        name: "Firebase",
        icon: firebase
      },
      {
        name: "Styled-components",
        icon: styledcomponents
      },
      {
        name: "Redux",
        icon: redux
      }
    ]
  },
  {
    title: "Pokedex",
    description: (
      <div>
        Pokedex application built as an exercise to improve my UI skills and
        learn Typescript
        <ul style={{ padding: "1rem" }}>
          <li>Routing with react-router / react-router-dom</li>
          <li>
            Fetching from&nbsp;
            <a href="https://pokeapi.co/" target="blank">
              PokeAPI
            </a>
          </li>
          <li>Styled Components</li>
          <li>Deployed to Vercel, using github integration for CI/CD</li>
          <li>Tested using Jest and Testing-library</li>
        </ul>
      </div>
    ),
    image: (
      <img src={poke} alt="pokedex" height="312" className="project-img" />
    ),
    deployment: "https://pokedex-ts.co.uk",
    github: "https://github.com/scrawnyColeman/pokedex",
    icons: [
      {
        name: "React",
        icon: react
      },
      {
        name: "JavaScript",
        icon: js
      },
      {
        name: "Typescript",
        icon: ts
      },
      {
        name: "Vercel",
        icon: vercel
      },
      {
        name: "Styled-components",
        icon: styledcomponents
      },
      {
        name: "Testing-Library",
        icon: rtl
      },
      {
        name: "Jest",
        icon: jest
      },
      {
        name: "ES6",
        icon: es6
      }
    ]
  }
];

export default projects;

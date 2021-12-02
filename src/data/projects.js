import es6 from "../assets/icons/es6.png";
import jest from "../assets/icons/jest.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import react from "../assets/icons/react.png";
import vercel from "../assets/icons/vercel.png";
import rtl from "../assets/icons/rtl.png";
import three from "../assets/icons/three.png";

import styledcomponents from "../assets/icons/styledcomponents.png";

import poke from "../assets/img/pokedex-screenshot.png";
import black from "../assets/img/black-hole-screenshot.png";
export const projects = [
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
            <a href="https://pokeapi.co/" target="blank" className="link">
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
      <img
        src={poke}
        alt="pokedex"
        height="312"
        width="312"
        className="project-img"
      />
    ),
    deployment: "https://pokedex-ts.co.uk",
    github: "https://github.com/scrawnyColeman/pokedex",
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
        name: "Typescript",
        icon: ts,
      },
      {
        name: "Vercel",
        icon: vercel,
      },
      {
        name: "Styled-components",
        icon: styledcomponents,
      },
      {
        name: "Testing-Library",
        icon: rtl,
      },
      {
        name: "Jest",
        icon: jest,
      },
      {
        name: "ES6",
        icon: es6,
      },
    ],
  },
  {
    title: "Black Hole",
    description: (
      <div>
        A fun project while learning ThreeJS. Decided to use the @react-three
        npm package - a React implementation of ThreeJS
        <ul style={{ padding: "1rem" }}>
          <li>Styled Components</li>
          <li>Deployed to Vercel, using github integration for CI/CD</li>
        </ul>
      </div>
    ),
    image: (
      <img
        src={black}
        alt="black-hole"
        height="312"
        width="312"
        className="project-img"
      />
    ),
    deployment: "https://black-hole.vercel.app",
    github: "https://github.com/scrawnyColeman/3D-BlackHole",
    icons: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "ThreeJS",
        icon: three,
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
        name: "Vercel",
        icon: vercel,
      },
      {
        name: "Styled-components",
        icon: styledcomponents,
      },
    ],
  },
];

export default projects;

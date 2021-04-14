import es6 from "../assets/icons/es6.png";
import jest from "../assets/icons/jest.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import rtl from "../assets/icons/rtl.png";
import sass from "../assets/icons/sass.png";
import redux from "../assets/icons/redux.png";
import springboot from "../assets/icons/springboot.png";
import mysql from "../assets/icons/mysql.png";
import java from "../assets/icons/java.png";

export const experience = [
  {
    type: "education",
    title: "Graduate Software Engineer",
    location: "AquaQ Analytics",
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
            <b>ES6</b> (and beyond) syntax. Using features like Object
            destructuring, arrow functions, optional chaining, and higher order
            Array functions, such as .filter .map . reduce, etc. for their
            ability to do lots of functionality with few lines of code.
          </li>
          <li>
            Prioritising <b>functional components</b> for their readability,
            code reduction and the benefits of utilising hooks.
          </li>
          <li>
            <b>SASS</b> for the benefits of nesting styles and creating CSS
            variables.
          </li>
          <li>
            <b>Redux</b> as a store for shared state, such as backdrop which is
            shared across multiple overlaying components, and a Toast which
            displays errors at App level, but can be called from many different
            components in the tree
          </li>
          <li>
            Utilising <b>React testing library</b> and <b>Jest</b> for unit
            testing
          </li>
        </ul>
      </div>
    ),
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
        name: "ES6",
        icon: es6
      },
      {
        name: "Jest",
        icon: jest
      },
      {
        name: "Testing Library",
        icon: rtl
      },
      {
        name: "SASS",
        icon: sass
      },
      {
        name: "Redux",
        icon: redux
      }
    ]
  },
  {
    type: "experience",
    title: "MSc Software Development",
    location: "The Queen's University of Belfast",
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
      }
    ]
  },
  {
    type: "experience",
    title: "BSc Economics",
    location: "The Queen's University of Belfast",
    description: (
      <div className="edu-description">
        <ul>
          <li>
            Graduated 3rd in class with a <b>First-Class</b> Honours
          </li>
          <li>
            Undertaken a wide variety of areas of study, including{" "}
            <b>Mathematics</b>, and <b>Econometrics</b> achieving 100% and 74%
            respectively.
          </li>
        </ul>
      </div>
    ),
    icons: []
  }
];

export default experience;

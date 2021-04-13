import "./style.scss";
import Widget from "../UI/Widget";

const Projects = () => {
  return (
    <div className="projects-container widget">
      <Widget title="Projects">
        This hasn't been implemented yet. If interested, you can find my github{" "}
        <a
          style={{ textDecoration: "none", color: "white", fontWeight: "600" }}
          href="https://github.com/scrawnyColeman"
        >
          here
        </a>
      </Widget>
    </div>
  );
};

export default Projects;

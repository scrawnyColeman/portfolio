import "./style.scss";
import Widget from "../UI/Widget";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
      {projects.map(project => {
        const {
          image,
          title,
          description,
          github,
          deployment,
          icons
        } = project;
        return (
          <div className="projects-container widget" key={`project: ${title}`}>
            <Widget>
              <div className="projects-wrapper">
                <div className="projects-content">
                  <div className="project-title-wrapper">
                    <h2 className="project-title">{title}</h2>
                  </div>
                  <div className="project-icons-wrapper">
                    {icons.map(i => (
                      <img
                        src={i.icon}
                        alt={i.name}
                        key={`project${title}:${i.name}`}
                        height="24"
                        className="project-icon"
                      />
                    ))}
                  </div>
                  <div className="project-description-wrapper">
                    {description}
                  </div>
                </div>
                <div className="projects-img-wrapper">
                  {image}
                  <div className="projects-btns-wrapper">
                    <a href={github} target="blank">
                      <button
                        type="button"
                        className="project-btn"
                      >{`Source`}</button>
                    </a>
                    {deployment.length > 0 && (
                      <a href={deployment} target="blank">
                        <button
                          type="button"
                          className="project-btn"
                        >{`View`}</button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Widget>
          </div>
        );
      })}
    </>
  );
};

export default Projects;

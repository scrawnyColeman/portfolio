import React from "react";
import "./style.scss";
import Widget from "../UI/Widget";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
      {projects.map((project) => {
        const { image, title, description, github, deployment, icons } =
          project;
        return (
          <div className="project-container widget" key={`project: ${title}`}>
            <Widget>
              <div className="widget-wrapper">
                <div className="project-content-wrapper">
                  <div className="widget-content">
                    <h2 className="widget-title">{title}</h2>
                    <div className="widget-icons-wrapper">
                      {icons.map((i) => (
                        <img
                          src={i.icon}
                          alt={i.name}
                          title={i.name}
                          key={`project${title}:${i.name}`}
                          height="24"
                          className="widget-icon"
                        />
                      ))}
                    </div>
                    <div className="widget-description-wrapper">
                      {description}
                    </div>
                  </div>
                  <div className="project-img-wrapper">
                    {image}
                    <div className="project-btns-wrapper">
                      <a href={github} target="blank">
                        <button type="button" className="project-btn">
                          Source
                        </button>
                      </a>
                      {deployment.length > 0 && (
                        <a href={deployment} target="blank">
                          <button type="button" className="project-btn">
                            View
                          </button>
                        </a>
                      )}
                    </div>
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

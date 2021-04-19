import "./style.scss";
import Widget from "../UI/Widget";
import { experience } from "../../data/experience";

const Education = () => {
  return (
    <>
      {experience.map(exp => {
        const { location, title, description, icons, when } = exp;
        return (
          <div className="education-container widget" key={`education${title}`}>
            <Widget>
              <div className="widget-content-wrapper">
                <div className="widget-content">
                  <h2 className="widget-title">{title}</h2>
                  <div className="widget-icons-wrapper">
                    {icons.map(i => (
                      <img
                        src={i.icon}
                        alt={i.name}
                        key={`edu-icon-${title}-${i.name}`}
                        height="24"
                        className="widget-icon"
                      />
                    ))}
                  </div>
                  <p className="widget-location">{location}</p>
                  <p className="education-date">{when}</p>
                  <div className="widget-description-wrapper">
                    {description}
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

export default Education;

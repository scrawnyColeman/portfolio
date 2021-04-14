import "./style.scss";
import Widget from "../UI/Widget";
import { experience } from "../../data/experience";
import EducationAndExperiencePanel from "../EducationAndExperiencePanel";

const Education = () => {
  return (
    <div className="education-container widget">
      <Widget title="Education and Experience">
        {experience.map(exp => {
          const { location, title, description, icons } = exp;
          return (
            <EducationAndExperiencePanel
              key={`${location}:${title}`}
              title={title}
              location={location}
              description={description}
              icons={icons}
            />
          );
        })}
      </Widget>
    </div>
  );
};

export default Education;

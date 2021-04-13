import "./style.scss";
import Widget from "../UI/Widget";
import technologies from "../../data/technologies";

const Technologies = () => {
  return (
    <div className="technologies-container">
      <Widget title="Technologies">
        <div className="icons-wrapper">
          {technologies.map(tech => (
            <img src={tech.icon} alt={tech.name} height="48" className="icon" />
          ))}
        </div>
      </Widget>
    </div>
  );
};

export default Technologies;

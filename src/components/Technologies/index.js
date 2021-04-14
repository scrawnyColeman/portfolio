import "./style.scss";
import technologies from "../../data/technologies";

const Technologies = () => {
  return (
    <div className="technologies-container">
      <div className="icons-wrapper">
        {technologies.map(tech => (
          <img
            src={tech.icon}
            alt={tech.name}
            key={tech.name}
            height="48"
            className="icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;

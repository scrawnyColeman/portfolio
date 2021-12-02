import "./style.scss";
import technologies from "../../data/technologies";

const Technologies = () => (
  <div className="technologies-container">
    <div className="icons-wrapper">
      {technologies.map((tech) => {
        const { icon, name } = tech;
        return (
          <img
            src={icon}
            alt={name}
            title={name}
            key={name}
            height="48"
            className="icon"
          />
        );
      })}
    </div>
  </div>
);

export default Technologies;

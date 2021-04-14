import "./style.scss";

const EducationAndExperiencePanel = ({
  title,
  location,
  description,
  icons
}) => {
  const iconsSection = icons.map(icon => (
    <img
      key={`${title}:${icon.name}`}
      src={icon.icon}
      alt={icon.name}
      className="edu-panel-icon"
      height="24"
    />
  ));
  return (
    <div className="edu-panel-wrapper">
      <div className="edu-panel-head">
        <h2 className="edu-title">{title}</h2>
        <p className="edu-location">{location}</p>
      </div>
      <div className="edu-panel-body">{description}</div>
      <div className="edu-panel-icons">{iconsSection}</div>
    </div>
  );
};

export default EducationAndExperiencePanel;

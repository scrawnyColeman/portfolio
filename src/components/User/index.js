import "./style.scss";

const User = () => {
  return (
    <div className="display-image-container widget">
      <div className="display-image"></div>
      <div className="user-description">
        <span className="user-name">Thomas Hutchinson</span>
        <span className="user-job">Frontend Web Developer</span>
      </div>
    </div>
  );
};

export default User;

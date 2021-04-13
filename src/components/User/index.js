import profileimg from "../../assets/img/profileimg.png";
import "./style.scss";

const User = () => {
  return (
    <div className="display-image-container widget">
      <img src={profileimg} alt="user" className="display-image" />
      <div className="user-description">
        <span className="user-name">Thomas Hutchinson</span>
        <span className="user-job">Frontend Web Developer</span>
      </div>
    </div>
  );
};

export default User;

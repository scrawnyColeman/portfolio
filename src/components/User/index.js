import profileimg from "../../assets/img/profileimg.png";
import "./style.scss";

const User = () => (
  <div className="display-image-container widget">
    <img
      src={profileimg}
      alt="Meeee (ish)"
      title="Meeee (ish)"
      className="display-image"
    />
    <div className="user-description">
      <span className="user-name">Thomas Hutchinson</span>
      <span className="user-job">UI Enthusiast - Problem Solver</span>
    </div>
  </div>
);

export default User;

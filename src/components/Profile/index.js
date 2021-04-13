import "./style.scss";
import Widget from "../UI/Widget";

const Profile = () => {
  return (
    <div className="profile-container widget">
      <Widget title="Personal Profile">
        You're early! Never worry. My
        <a
          style={{ textDecoration: "none", fontWeight: "600", color: "#eee" }}
          href="https://github.com/scrawnyColeman"
        >
          &nbsp;github&nbsp;
        </a>
        and
        <a
          style={{ textDecoration: "none", fontWeight: "600", color: "#eee" }}
          href="https://www.linkedin.com/in/thomas-hutchinson-dev/"
        >
          &nbsp;LinkedIn&nbsp;
        </a>
        will hopefully have the information you seek! Feel free to reach out
      </Widget>
    </div>
  );
};

export default Profile;

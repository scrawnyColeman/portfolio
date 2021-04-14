import "./style.scss";
import Widget from "../UI/Widget";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";

const Profile = () => {
  const blurbString =
    "Excited to become the best developer that I can be within a supportive and collaborative environment";
  return (
    <div className="profile-container widget">
      <Widget>
        <div className="personal-profile-widget-body">
          <div>
            <div className="personal-profile-head">
              <i>Frontend Engineer</i> at&nbsp;
              <a
                className="personal-profile-job"
                href="https://aquaq.co.uk"
                target="blank"
              >
                AquaQ Analytics
              </a>
            </div>
            <div className="personal-profile-blurb">{blurbString}</div>
            <div className="profile-footer">
              <a href="https://github.com/scrawnyColeman" target="blank">
                <img
                  src={Github}
                  alt="github"
                  height="36"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-hutchinson-dev/"
                target="blank"
              >
                <img
                  src={Linkedin}
                  alt="linkedin"
                  height="36"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </Widget>
    </div>
  );
};

export default Profile;

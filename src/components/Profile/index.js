import "./style.scss";
import Widget from "../UI/Widget";
import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";

const Profile = () => {
  const blurbString =
    "Excited by creative UI's and love to build clean, elegant solutions with modern JavaScript. You'll find me on the web masquerading as @scrawnyColeman";
  return (
    <div className="profile-container widget">
      <Widget>
        <div className="personal-profile-widget-body">
          <div>
            <div className="personal-profile-head">
              Software Engineer at&nbsp;
              <a
                className="personal-profile-job link"
                href="https://trilo.io"
                target="blank"
              >
                Trilo
              </a>
            </div>
            <div className="personal-profile-blurb">{blurbString}</div>
            <div className="profile-footer">
              <a href="https://github.com/scrawnyColeman" target="blank">
                <img
                  src={Github}
                  alt="GitHub"
                  title="GitHub"
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
                  alt="LinkedIn"
                  title="LinkedIn"
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

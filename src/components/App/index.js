import "./style.scss";
import Technologies from "../Technologies";
import Profile from "../Profile";
import User from "../User";
import Projects from "../Projects";
import EducationAndExperience from "../EducationAndExperience";

const App = () => {
  return (
    <div className="app-container">
      <User />
      <Profile />
      <Technologies />
      <Projects />
      <EducationAndExperience />
    </div>
  );
};

export default App;

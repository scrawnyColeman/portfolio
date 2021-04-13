import "./style.scss";
import Technologies from "../Technologies";
import Profile from "../Profile";
import User from "../User";
import Projects from "../Projects";
import Education from "../Education";

const App = () => {
  return (
    <div className="app-container">
      <User />
      <Profile />
      <Technologies />
      <Projects />
      <Education />
    </div>
  );
};

export default App;

import "./style.scss";
import Technologies from "../Technologies";
import Profile from "../Profile";
import User from "../User";
import Projects from "../Projects";

const App = () => {
  return (
    <div className="app-container">
      <User />
      <Profile />
      <Technologies />
      <Projects />
      <div className="education-container widget">Hello</div>
    </div>
  );
};

export default App;

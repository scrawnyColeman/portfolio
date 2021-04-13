import "./style.scss";
import Technologies from "../Technologies";
import Profile from "../Profile";
import User from "../User";

const App = () => {
  return (
    <div className="app-container">
      <User />
      <Profile />
      <Technologies />
      <div className="projects-container widget">Hello</div>
      <div className="education-container widget">Hello</div>
    </div>
  );
};

export default App;

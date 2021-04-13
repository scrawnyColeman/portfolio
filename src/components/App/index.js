import "./style.scss";
import Technologies from "../Technologies";
import Profile from "../Profile";

const App = () => {
  return (
    <div className="app-container">
      <div className="display-image-container widget">Hi</div>
      <Profile />
      <Technologies />
      <div className="projects-container widget">Hello</div>
      <div className="education-container widget">Hello</div>
    </div>
  );
};

export default App;

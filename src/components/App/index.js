import "./style.scss";
import Technologies from "../Technologies";

const App = () => {
  return (
    <div className="app-container">
      <div className="display-image-container widget">Hi</div>
      <div className="profile-container widget">Hello</div>
      <Technologies />
      <div className="projects-container widget">Hello</div>
      <div className="education-container widget">Hello</div>
    </div>
  );
};

export default App;

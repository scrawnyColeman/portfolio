import "./style.scss";

const Widget = ({ title, children }) => {
  return (
    <div className="widget-wrapper">
      <div className="widget-header">{title}</div>
      <div className="widget-body">{children}</div>
    </div>
  );
};

export default Widget;

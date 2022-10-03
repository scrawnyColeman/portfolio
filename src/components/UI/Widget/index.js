import React from "react";
import "./style.scss";

const Widget = ({ children }) => {
  return (
    <div className="widget-wrapper">
      <div className="widget-body">{children}</div>
    </div>
  );
};

export default Widget;

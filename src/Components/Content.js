import React from "react";

import "../Css/Content.css";

function Content() {
  return (
    <div className="content-container">
      <div className="place-name">
        <span>
          <i className="fas fa-street-view"></i>
        </span>
        <span>
          <h2>Pune</h2>
        </span>
      </div>
      <div className="temp-info">
        <h3>5.25C</h3>
        <span>
          <p>Min: 5.25 Cel | Max: 5.25 Cel</p>
        </span>
      </div>
      <div className="wave wave1" />
      <div className="wave wave2" />
      <div className="wave wave3" />
    </div>
  );
}

export default Content;

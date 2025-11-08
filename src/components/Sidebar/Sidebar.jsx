import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (

    <div className="sidebar">
      <div className="sidebar__section">
      <Link to={{ pathname: "/se_project_react/profile" }}>
        <img src="images/avatar.png" alt="User Avatar" />
      </Link>
      <div className="header__username">Terrance Tegegne</div>
    </div>
    </div>
  );
};

export default Sidebar;

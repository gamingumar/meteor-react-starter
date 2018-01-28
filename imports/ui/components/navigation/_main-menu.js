import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => (
  <div id="main-menu">
    <div className="container">
      <div className="menu-list">
        <Link activeClassName="active" to="/">Task</Link>
        <Link activeClassName="active" to="/submission">Submission</Link>
      </div>
    </div>
  </div>
);

export default MainMenu;

import React from "react";
import { NavLink } from "react-router-dom";
// import Index from "../index"


function NavBar() {
  return (
    <nav className="nav">
      <div>
        <h4 className="site-title"> Travel Bucket List </h4>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink exact to="/" className="navs">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navs">About</NavLink>
          </li>
          <li>
            <NavLink to="bucketlist" className="navs">Bucket List</NavLink>
          </li>
          <li>
            <NavLink to="visited" className="navs">Visited</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

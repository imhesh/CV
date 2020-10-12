import React from "react";
import { NavLink } from "react-router-dom";
import './headfoot.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">TheFunCurriculum</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/curriculum">Curriculum</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/concepts">Concepts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/games">Games</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/creators">Creators</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
         
          
        </ul>
      </div>
    </nav>
  );
}
export default Header;

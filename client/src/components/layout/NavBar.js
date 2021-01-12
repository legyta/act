import React, { Component } from "react";
import "../styling/navbar.css";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <NavLink to="/vision">
                    <a>About</a>{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <a>Contact</a>{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../styling/navbar.css";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

export default class NavBar extends Component {
  render() {
    return (
      <Box className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <Box className="hamburger">
          <div></div>
        </Box>
        <Box className="menu">
          <Box>
            <Box>
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
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

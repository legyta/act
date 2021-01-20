import React, { Component } from "react";
import "../styling/navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Vision from "../pages/Vision";
import Box from "@material-ui/core/Box";

export default class NavBar extends Component {
  render() {
    return (
      <Box className="menu-wrap" style={{ marginLeft: "80px" }}>
        <input type="checkbox" className="toggler" />
        <Box className="hamburger">
          <div></div>
        </Box>
        <Box className="menu">
          <Box>
            <Box>
              <ul>
                <li>
                  <Link to="/vision">
                    <a>About</a>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <a>Contact</a>{" "}
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
//import actLogo from "../images/actLogo.JPG";
import Box from "@material-ui/core/Box";
import { StylesProvider } from "@material-ui/core/styles";
import { global } from "../styling/global.css";
import NavBar from "./NavBar";

export default function Logo() {
  return (
    <Box container id="logo">
      <a href="/">
        <img
          style={{ width: "40%" }}
          //src={actLogo}
          alt="logo"
          className="logo-image"
        />
      </a>
    </Box>
  );
}

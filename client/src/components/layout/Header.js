import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import actLogo from "../images/actLogo.JPG";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { StylesProvider } from "@material-ui/core/styles";
import { global } from "../styling/global.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <Grid container id="header" flexDirection="row">
      <Box>
        <Box container id="logo">
          <a href="/">
            <img
              style={{ width: "6%" }}
              src={actLogo}
              alt="logo"
              className="logo-image"
            />
          </a>
        </Box>
        <NavBar />
        <AuthOptions />
      </Box>
    </Grid>
  );
}

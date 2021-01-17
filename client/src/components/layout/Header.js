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
      <Box className="header-box" width="100%">
        <Box width="20%">
          <a href="/">
            <img src={actLogo} alt="logo" className="logo-image" />
          </a>
          <NavBar />
        </Box>
        <Box width="80%" marginTop="20px">
          <AuthOptions />
        </Box>
      </Box>
    </Grid>
  );
}

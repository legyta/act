import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import actLogo from "../images/actLogo.JPG";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { StylesProvider } from "@material-ui/core/styles";
import { footer } from "../styling/footer.css";
import NavBar from "./NavBar";

export default function Footer() {
  return (
    <Grid container id="footer" flexDirection="row" alignItems="centre">
      <Box className="footer-box">
        <Box className="footer-logo">
          {" "}
          <a href="/">
            <img src={actLogo} alt="logo" className="logo-image" />
          </a>
        </Box>
        <Box className="register">
          <Box>
            <a href="/register">Start action</a>
            <br></br>
            <a href="/login">Join us</a>
          </Box>
        </Box>
        <Box className="rights">
          &copy;{new Date().getFullYear()} Act <br></br> All Rights Reserved
        </Box>
      </Box>
    </Grid>
  );
}

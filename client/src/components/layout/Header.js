import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import actLogo from "../images/actLogo.png";
import Grid from "@material-ui/core/Grid";
import { StylesProvider } from "@material-ui/core/styles";
import { global } from "../styling/global.css";

export default function Header() {
  return (
    <Grid id="header">
      <StylesProvider injectFirst>
        {/* <header id="header"> */}
        <a href="/">
          <img
            style={{ width: "50%" }}
            src={actLogo}
            alt="logo"
            className="logo-image"
          />
        </a>
        <AuthOptions />
        {/* </header> */}
      </StylesProvider>
    </Grid>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import actLogo from "../images/actLogo.png";
import Grid from "@material-ui/core/Grid";
import { StylesProvider } from "@material-ui/core/styles";
import { global } from "../styling/global.css";
import NavBar from "./NavBar";
import Logo from "./Logo";

export default function Header() {
  return (
    <Grid container id="header" direction="row">
      <Logo />
      <NavBar />
      <AuthOptions />
    </Grid>
  );
}

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Title from "../images/Title.png";
import Header from "../layout/Header";

export default function Index() {
  const { userData } = useContext(UserContext);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="left"
      className="page"
    >
      {/* {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : ( */}
      <>
        <img src={Title} alt="index-image" className="index-image" />
      </>
      {/* )} */}
    </Grid>
  );
}

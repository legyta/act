import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "../layout/NavBar";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import visionHands from "../images/visionHands.svg";
import vision from "../styling/vision.css";

export default function Vision() {
  const { userData } = useContext(UserContext);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="left"
      className="page"
    >
      <Header />
      {/* {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : ( */}
      <Box className="vision-page">
        <Box
          className="vision-card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Box className="vision-vision">
            <h1>Vision</h1>
            <h2>Subtitle</h2>
            <p>Text body</p>
          </Box>

          <Box direction="column" justify="center" alignItems="right">
            <img
              style={{ marginLeft: "20px" }}
              src={visionHands}
              alt="vision-image"
              className="vision-image"
            />
          </Box>
        </Box>

        <Box
          className="mission-card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Box direction="column" justify="center" alignItems="right">
            <img
              style={{ marginRight: "20px" }}
              src={visionHands}
              alt="vision-image"
              className="vision-image"
            />
          </Box>
          <Box className="vision-mission">
            <h1>Mission</h1>
            <h2>Subtitle</h2>
            <p>Text body</p>
          </Box>
        </Box>

        <Box
          className="values-card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Box className="vision-values">
            <h1>Values</h1>
            <h2>Subtitle</h2>
            <p>Text body</p>
          </Box>

          <Box direction="column" justify="center" alignItems="right">
            <img
              style={{ marginLeft: "20px" }}
              src={visionHands}
              alt="vision-image"
              className="vision-image"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Grid>
  );
}

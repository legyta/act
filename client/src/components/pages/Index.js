import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import indexHands from "../images/indexHands.svg";

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
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <>
          <Box>
            <Box className="index-vision">
              <h1>Vision</h1>
              <h2>Subtitle</h2>
              <p>Text body</p>
            </Box>

            <Box direction="column" justify="center" alignItems="right">
              <img src={indexHands} alt="index-image" className="index-image" />
            </Box>
          </Box>

          <Box>
            <Box direction="column" justify="center" alignItems="right">
              <img src={indexHands} alt="index-image" className="index-image" />
            </Box>
            <Box className="index-mission">
              <h1>Mission</h1>
              <h2>Subtitle</h2>
              <p>Text body</p>
            </Box>
          </Box>

          <Box>
            <Box className="index-values">
              <h1>Values</h1>
              <h2>Subtitle</h2>
              <p>Text body</p>
            </Box>

            <Box direction="column" justify="center" alignItems="right">
              <img src={indexHands} alt="index-image" className="index-image" />
            </Box>
          </Box>
        </>
      )}
    </Grid>
  );
}

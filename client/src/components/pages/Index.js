import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Title from "../images/Title.png";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ImageSlider from "../pieces/ImageSlider";
import landingPage1 from "../images/landingPage1.jpg";
import landingPage2 from "../images/landingPage2.jpg";
import landingPage3 from "../images/landingPage3.jpg";
import index from "../styling/index.css";

export default function Index() {
  const { userData } = useContext(UserContext);
  const [images] = useState([landingPage1, landingPage2, landingPage3]);

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

      <Box className="index-page">
        <ImageSlider
          className="slider-image"
          images={images}
          style={{ borderRadius: "10px" }}
        />
      </Box>
      {/* )} */}
      <Footer />
    </Grid>
  );
}

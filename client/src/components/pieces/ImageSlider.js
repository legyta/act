import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import landingPage1 from "../images/landingPage2.jpg";
import landingPage2 from "../images/landingPage2.jpg";
import landingPage3 from "../images/landingPage3.jpg";
import slider from "../styling/slider.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <Box
        className="sliderBox"
        style={{ display: "flex", alignItems: "centre" }}
      >
        <Box
          className="arrows"
          style={{
            zIndex: "1",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            padding: ".6rem",
            marginTop: "26%",
          }}
        >
          {" "}
          <ArrowBackIosIcon onClick={slideLeft} className="arrowLeft" />
          <ArrowForwardIosIcon onClick={slideRight} className="arrowRight" />
        </Box>
        <Box className="images">
          <img
            src={images[index]}
            alt=""
            style={{ zIndex: "-1", position: "absolute" }}
          />
        </Box>
      </Box>
    )
  );
};

export default ImageSlider;

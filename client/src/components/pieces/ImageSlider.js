import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import landingPage1 from "../images/landingPage2.jpg";
import landingPage2 from "../images/landingPage2.jpg";
import landingPage3 from "../images/landingPage3.jpg";

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
      <Box style={{ display: "flex", alignItems: "centre" }}>
        <Box
          className="arrows"
          style={{
            zIndex: "1",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
          }}
        >
          <button
            style={{ fontSize: "3rem", color: "#5ad1db" }}
            onClick={slideLeft}
          >
            {" "}
            {"<"}
          </button>
          <button
            style={{ fontSize: "3rem", color: "#5ad1db" }}
            onClick={slideRight}
          >
            {">"}
          </button>
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

import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    };
  }

  handleBackClick = () => {
    this.setState((prevState) => ({
      id: (prevState.id - 1 + images.length) % images.length,
    }));
  };

  handleForwardClick = () => {
    this.setState((prevState) => ({
      id: (prevState.id + 1) % images.length,
    }));
  };

  render() {
    const currentImage = images[this.state.id];

    return (
      <div id="carousel-container">
        <div id="backward" onClick={this.handleBackClick}>
          <ArrowBackIosIcon sx={{ color: "white" }} />
        </div>
        <div id="carousel">
          <div id="title">{currentImage.title}</div>
          <div id="subtitle">{currentImage.subtitle}</div>
          <img id="image" src={currentImage.img} alt="" />
        </div>
        <div id="forward" onClick={this.handleForwardClick}>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </div>
      </div>
    );
  }
}

export default Carousel;

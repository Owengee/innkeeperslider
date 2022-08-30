import React from "react";
import "./Testimonialslider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Testimonialslider = (props) => {
  // const slides = [
  //   {
  //     image: `https://picsum.photos/400/300`,
  //     title: "testimonial images",
  //     description: "image",
  //   },

  //   {
  //     image: `https://picsum.photos/600/500`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  //   {
  //     image: `https://picsum.photos/700/600`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  //   {
  //     image: `https://picsum.photos/800/700`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  //   {
  //     image: `https://picsum.photos/600/700`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  //   {
  //     image: `https://picsum.photos/500/400`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  //   {
  //     image: `https://picsum.photos/900/800`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  //   {
  //     image: `https://picsum.photos/400/600`,
  //     title: "testimonial images",
  //     description: "image",
  //   },
  // ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div
              className="slider-card"
              key={index}
              onClick={() => slide.clickEvent()}
            >
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: `cover`,
                }}
              ></div>
              {/* <p className="slider-card-title">card-title</p>
              <p className="slider-card-description">card description</p> */}
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default Testimonialslider;

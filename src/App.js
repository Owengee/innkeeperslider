import * as React from "react";
import { MdAddAlert } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Testimonialslider from "./component/Testimonialslider";

function App() {
  const sliderClick = (slider) => {
    alert("hello world");
  };
  const slides = [
    {
      image: `https://picsum.photos/400/300`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },

    {
      image: `https://picsum.photos/600/500`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
    {
      image: `https://picsum.photos/700/600`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
    {
      image: `https://picsum.photos/800/700`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
    {
      image: `https://picsum.photos/600/700`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
    {
      image: `https://picsum.photos/500/400`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
    {
      image: `https://picsum.photos/900/800`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
    {
      image: `https://picsum.photos/400/600`,
      title: "testimonial images",
      description: "image",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div className="App" id="body">
      <Routes>
        <Route path="/" element={<Testimonialslider slides={slides} />} />
      </Routes>
    </div>
  );
}

export default App;

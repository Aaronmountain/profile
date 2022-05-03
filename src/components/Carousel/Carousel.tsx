import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.styles";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  easing: "ease-in-out",
  responsive: [
    {
      breakpoint: 768,
      settings: { arrows: false, dots: false },
    },
  ],
} as Settings;

type Props = {
  children: React.ReactNode;
  additionalSettings?: Settings;
};

const Carousel = ({ children, additionalSettings = {} }: Props) => {
  if (!React.Children.count(children)) return null;

  const sliderSettings = { ...defaultSettings, ...additionalSettings };

  return (
    <React.Fragment>
      <Slider {...sliderSettings}>{children}</Slider>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
};

export default Carousel;

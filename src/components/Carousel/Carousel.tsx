import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <style jsx>{`
        :global(.slick-track) {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* arrows */
        :global(.slick-arrow) {
          width: 42px !important;
          height: 42px !important;
        }

        :global(.slick-prev) {
          left: -6% !important;
        }

        :global(.slick-next) {
          right: -6% !important;
        }

        :global(.slick-prev.dark::before, .slick-next.dark::before) {
          color: black !important;
        }

        /* dots */
        :global(.slick-dots) {
          bottom: -63px;
        }

        :global(.slick-dots li) {
          width: 42px;
          height: 42px;
        }

        :global(.slick-dots li button::before) {
          font-size: 1.25rem !important;
        }

        :global(.slick-dots li.slick-active button::before) {
          color: #fff;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Carousel;

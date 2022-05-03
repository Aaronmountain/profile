import css from "styled-jsx/css";

export default css`
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
`;

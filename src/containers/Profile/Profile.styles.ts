import css from "styled-jsx/css";

export default css`
  .profile {
    overflow: hidden;

    &__photo {
      text-align: center;
      background-image: linear-gradient(60deg, #d8d8d8 30%, #5b8a8a 80%);
      padding-top: 66px;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: relative;
        left: -1000px;
        animation: img-slide-in 1s linear forwards;
      }

      @keyframes img-slide-in {
        0% {
          left: -1000px;
        }

        50% {
          left: -500px;
        }

        100% {
          left: 0;
        }
      }

      h1 {
        font-size: 60px;
        font-weight: 500;
        padding-bottom: 80px;
        padding-left: 30px;
        letter-spacing: 30px;
        color: #2b2a2a;
        position: relative;
        right: -1000px;
        animation: name-slide-in 1s 0.5s linear forwards;
      }

      @keyframes name-slide-in {
        0% {
          right: -1000px;
        }

        50% {
          right: -500px;
        }

        100% {
          right: -0;
        }
      }
    }

    &__introduction {
      margin: 0 100px;
      color: #423d3d;
      text-align: justify;
      box-sizing: border-box;
      padding: 50px 0;
      opacity: 0;

      &.show {
        animation: show 2s linear forwards;
      }

      h2 {
        font-size: 50px;
        color: #2b2a2a;
        text-shadow: 10px 10px 20px #4e4949;
        text-align: center;
        padding-bottom: 55px;
      }

      p {
        /* text-indent: 2rem; */
        font-size: 25px;
        font-weight: 400;
        line-height: 1.7;
      }

      @keyframes show {
        0% {
          opacity: 0;
        }

        25% {
          opacity: 0.3;
        }

        50% {
          opacity: 0.6;
        }

        100% {
          opacity: 1;
        }
      }

      @media screen and (max-width: 1000px) {
        margin: 0 30px;
      }
    }

    &__carousel {
      width: 80%;
      margin: 3rem auto 5rem;
    }
  }
`;

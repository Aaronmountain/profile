import css from "styled-jsx/css";

export default css`
  .home {
    position: relative;
    width: 100%;
    height: 100vh;

    /* stylelint-disable */
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
      url("home/background.jpg") center/cover;
    /* stylelint-enable */
  }

  .description {
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 20px;
    color: #fff;
    text-align: center;
    margin: auto;

    h2 {
      line-height: 1.8;
    }

    button {
      width: 100%;
      color: #fff;
      border: 3px solid #fff;
      padding: 10px;
      border-radius: 30px;
      position: relative;
      top: 40px;

      &::before {
        content: "";
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 30px;
        transition: 1s;
        z-index: -1;
      }

      &:hover::before {
        width: 100%;
        background: #40f8e0c5;
        transform: scaleY(1.1);
      }
    }

    @media screen and(max-width: 1090px) {
      font-size: 22px;
      line-height: 1.7;

      a {
        margin: 0 25px;
      }
    }

    @media screen and(max-width: 480px) {
      font-size: 17px;
      font-weight: 700;

      a {
        margin-top: 25px;
      }
    }
  }
`;

import css from "styled-jsx/css";

export default css`
  .flex {
    display: flex;
  }

  .justify-content-end {
    justify-content: flex-end;
  }

  .modal {
    width: 80%;
    height: 85%;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1050;
    background: rgb(41, 41, 41);
    border: 3px solid rgb(22, 63, 97);
    color: #9e9e9e;
    line-height: 1.8;
    overflow-y: scroll;
    padding: 2% 5%;

    &__close-icon {
      position: absolute;
      right: 1.5%;
      top: 5%;
      width: 1.5rem;
      height: 1.5rem;
      background: url("common/cross-close.svg") center/cover no-repeat;
    }

    &__buttom-close {
      width: 50px;
      height: 50px;
      background: #50c9c3;
      border-radius: 50%;
      font-size: 20px;
      color: #fff;
    }

    &__content {
      padding: 24px 0;
      word-break: break-all;

      &__link {
        color: #fff;
        transition: 0.5s ease-in-out;

        &:hover {
          color: rgb(5, 3, 107);
          transform: translateY(-5px);
        }

        &:visited {
          color: lightblue;
        }
      }

      &__text {
        display: block;
      }
    }

    &__carousel {
      margin: auto;
      padding: 5% 0;
      position: relative;
      background: rgb(41, 41, 41);

      &__item {
        img {
          min-height: 100%;
          border: 1.5px solid #2b1f1f;
        }
      }
    }
  }
`;

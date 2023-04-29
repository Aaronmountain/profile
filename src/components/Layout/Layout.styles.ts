import css from "styled-jsx/css";

export const headerHeight = 75;

export default css`
  header {
    width: 100%;
    height: ${headerHeight}px;
    top: -100px;
    position: fixed;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: movedown 1.5s ease forwards;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: absolute;
      top: -100px;
      left: 60px;
      animation: movedown 1.5s ease forwards;
      font-size: 35px;
      color: #fff;
    }

    .navbar {
      top: -100px;
      animation: movedown 1.5s linear forwards;
      flex: 1;
      text-align: right;

      &__item {
        display: inline-block;
        padding-right: 25px;

        &__link {
          position: relative;
          font-weight: 500;
          color: #fff;
          padding-bottom: 5px;

          &::after {
            content: "";
            width: 0;
            height: 3px;
            background: #23fafa;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            transition: 0.5s ease-in-out;
          }
        }

        &__link.active,
        &__link:hover {
          color: #f8871c;

          &::after {
            width: 100%;
          }
        }
      }
    }

    &.introduction {
      background-image: linear-gradient(180deg, #93a5cfe0 0%, #cbd8d1e0 100%);
      box-shadow: 0 0 20px 0 rgb(121, 121, 121);
    }

    &.home .logo {
      text-decoration: underline;
    }

    @keyframes movedown {
      100% {
        top: 0;
      }
    }
  }

  .body-content {
    background-color: #e4e4e4d3;
    padding-top: ${headerHeight}px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .footer {
    background-color: rgb(88, 89, 151);
    color: #fff;

    .contact {
      padding: 1.5% 5%;

      &__item {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1% 0;

        &__link {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.2rem;
          transition: 0.5s ease-in-out;

          &:hover {
            color: rgb(5, 3, 107);
            transform: translateY(-10px);
          }
        }
      }
    }
  }

  .menu {
    display: none;
    transition: 1s ease-in-out;
  }

  #rwdmenu {
    position: fixed;
    opacity: 0;
    z-index: -99;
  }

  #rwdmenu:checked ~ .menu {
    transform: rotate(90deg);
  }

  @media screen and (max-width: 768px) {
    header {
      &.introduction {
        background-image: none;
        box-shadow: none;
      }

      .logo {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
      }

      .navbar {
        position: fixed;
        top: 0;
        right: -200%;
        width: 100%;
        height: 100%;
        z-index: 8;
        background: #074141e8;
        transition: 0.5s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        li {
          width: 100%;
          padding: 56px 0;
          text-align: center;
          border-bottom: 2px solid #fff;
        }
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .menu {
      display: block;
      position: fixed;
      top: 1%;
      right: 20px;
      z-index: 999;
    }

    #rwdmenu:checked ~ header .navbar {
      right: 0;
    }
  }
`;

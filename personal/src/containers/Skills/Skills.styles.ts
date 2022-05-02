import css from "styled-jsx/css";

export default css`
  .skills {
    &__container {
      display: flex;
      justify-content: space-evenly;
      padding: 50px 0;

      &__item {
        position: relative;
        width: 250px;
        border: 2px solid rgb(223, 250, 252);
        background: rgb(155, 155, 155);
        box-shadow: 0 0 5px 3px rgb(115, 131, 133);
        transition: 0.5s ease-out;
        text-align: center;
        margin: 0 10px;
        padding: 20px;

        &:hover {
          transform: translateY(-10px);
          color: rgb(255, 255, 255);
        }

        h2 {
          padding-bottom: 20px;
          font-size: 45px;
        }

        li {
          padding: 8px 0;
          border-bottom: 1px solid rgb(68, 68, 68);
          font-size: 1rem;
        }
      }
    }

    @media screen and (max-width: 968px) {
      &__container {
        flex-wrap: wrap;

        &__item {
          margin-bottom: 5%;
        }
      }
    }

    @media screen and (max-width: 700px) {
      &__container__item {
        margin-bottom: 8%;
      }
    }
  }

  .next-page {
    display: flex;
    justify-content: flex-end;
    padding: 5% 3%;
    user-select: none;

    button {
      padding: 0.75rem 2.4rem;
      background-color: #f8871c;
      border: 2px solid rgb(70, 54, 2);
      color: #fff;

      &:hover {
        color: rgb(66, 51, 3);
      }
    }
  }
`;

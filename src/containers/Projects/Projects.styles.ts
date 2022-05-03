import css from "styled-jsx/css";

export default css`
  .project {
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      &__item {
        flex-basis: 48%;
        margin: 2.5rem 1%;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
          opacity: 0;
          transform: scale(0);
          transition: 0.5s;
        }

        .link {
          display: block;
          width: 56px;
          height: 56px;
          position: absolute;
          bottom: 5%;
          right: 3%;
        }

        &:hover .backdrop {
          opacity: 1;
          transform: scale(1);
          backdrop-filter: blur(5px);
        }
      }

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        &__item {
          flex-basis: 100%;
          margin: 1rem 0;
        }
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

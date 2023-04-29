import css from "styled-jsx/css";

export default css`
  .desc {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    line-height: 1.5;

    &__skills {
      max-height: 200px;
      overflow-y: scroll;
    }

    &__viewmore {
      color: #fff;
      transition: 0.5s linear;

      &:hover {
        background: linear-gradient(rgb(57, 247, 190), rgba(16, 94, 81, 0.712));
        border: 1px solid rgba(16, 94, 81, 0.712);
        transform: scale(1.2);
        padding: 0.25rem 2rem;
      }
    }

    .github-link {
      display: block;
      width: 56px;
      height: 56px;
      position: absolute;
      bottom: 5%;
      right: 3%;
    }
  }
`;

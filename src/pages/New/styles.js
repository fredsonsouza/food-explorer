import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.8rem;

  grid-template-areas:
    "header"
    "Content"
    "footer";
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 122rem;
  margin: 3.2rem auto 0 auto;
`;

export const Form = styled.form`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 3.2rem;

  section {
    width: 100%;

    .ingredients {
      display: flex;
      flex-wrap: nowrap;
      gap: 2rem;

      width: 100%;
    }
    .ingredients-tags {
      width: 100%;
    }
    .ingredient-item {
      display: flex;
      flex-wrap: wrap;
      height: 4.8rem;
      border-radius: 0.5rem;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      margin-top: 0.8rem;
    }
    .price {
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      margin-top: 0.8rem;
    }
  }

  textarea {
    margin-top: 0.8rem;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  .buttons {
    width: 40%;
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 3.2rem;

    button:nth-child(1) {
      img {
        display: none;
      }
      border: 0;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

      margin-left: auto;
    }
    button:nth-child(2) {
      img {
        display: none;
      }
    }
  }
  .col-3 {
    display: flex;
    gap: 2rem;

    input {
      margin-top: 0.8rem;
    }
  }
  .col-3 > div {
    width: 100%;
  }
  .col-3 > div:nth-child(1) {
    display: flex;
    /* border: 1px solid yellow; */

    flex-direction: column;
    width: 60rem;
  }
  .col-3 > div:nth-child(2) {
    width: 100%;
  }
  .col-3 > div:nth-child(3) {
    width: 75rem;
  }

  .img-dishe {
    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      border-radius: 0.5rem;
      height: 4.8rem;
      margin-top: 1rem;
      label {
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        align-items: center;
        gap: 1rem;
        flex: 1;
        input {
          display: none;
        }
      }
    }
  }
`;

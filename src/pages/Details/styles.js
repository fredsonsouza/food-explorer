import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.8rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  header {
    input {
      border: 0;
      outline: 0;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 122rem;
  height: 100%;
  padding: 2rem 0;
  margin: 0 auto;

  section {
    display: flex;
    align-items: center;
    max-width: 100%;
    img {
      width: 39rem;
    }

    div {
      margin-left: 5rem;
    }
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      margin-bottom: 2.4rem;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 140%;
      margin-bottom: 2.8rem;
    }
    button {
      width: auto;
      margin-top: 5rem;
      img {
        display: none;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding-top: 2.4rem;

  main {
    max-width: 136.8rem;
    margin: 0 auto;
    gap: 4rem;
    display: flex;
    padding-top: 6rem;
  }

  img {
    width: 39rem;
    height: 39rem;
    object-fit: cover;
  }
  section {
    max-width: 62rem;

    > div {
      display: flex;
      gap: 5rem;
      align-items: center;
      margin-top: 4rem;
    }
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      margin-bottom: 0.8rem;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 140%;
      margin-bottom: 3.4rem;
    }
  }
`;
export const Return = styled.div`
  max-width: 136.8rem;
  margin: 0 auto;
`;

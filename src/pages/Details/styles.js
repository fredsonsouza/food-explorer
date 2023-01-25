import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.8rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 122rem;
  height: 100%;
  padding: 2rem 0;
  margin: 0 auto;

  section {
    display: flex;
    padding-top: 4rem;
    align-items: center;

    img {
      width: 38rem;
    }
    > div {
      margin-left: 3.2rem;
      max-width: 65rem;
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
      margin-bottom: 4rem;
    }
    .pay {
      display: flex;
      align-items: center;
      gap: 6rem;
      margin-top: 5rem;
    }
  }
`;

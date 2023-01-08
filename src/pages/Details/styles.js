import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    width: 100%;
    padding: 0 12.4rem;
    margin-top: 2.4rem;
  }
`;
export const Content = styled.div`
  max-width: 136.8rem;
  display: flex;
  align-items: stretch;
  gap: 8rem;
  margin: 4rem auto 0 auto;

  img {
    width: 44rem;
    height: 44rem;
    background-size: cover;
  }
`;

export const Info = styled.div`
  display: grid;
  max-width: 60.2rem;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 1rem;
  }
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;
    margin-bottom: 5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    ul {
      display: flex;
      gap: 3.2rem;
      margin-bottom: 4rem;
      li {
        display: grid;
        justify-items: center;
        align-items: center;
        gap: 1rem;

        span {
          font-style: normal;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 140%;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
      }
    }
    img {
      width: 5.4rem;
      height: 5.1rem;
      background-size: cover;
    }
  }
`;

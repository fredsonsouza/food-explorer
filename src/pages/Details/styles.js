import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto auto 10.5rem;
  grid-template-areas:
    "header"
    "menuItem"
    "content"
    "footer";

  > main {
    width: 136.8rem;
    margin: 0 auto;
  }
`;
export const MenuItem = styled.div`
  grid-area: menuItem;
  display: flex;
  width: 100%;
  padding-top: 2.4rem;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  height: 100%;
  gap: 4rem;
  align-items: stretch;
  width: 100%;
  margin-top: 6.7rem;

  > img {
    width: 39rem;
    height: 39rem;
    object-fit: cover;
  }
  > section {
    max-width: 62rem;
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
    > div {
      display: flex;
      align-items: center;
      gap: 3.6rem;
      margin-top: 4.7rem;
    }
  }
`;

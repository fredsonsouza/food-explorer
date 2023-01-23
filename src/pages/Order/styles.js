import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 10.5rem auto 7.7rem;

  grid-template-areas:
    "header"
    "content"
    "footer";
  main {
    padding-top: 3.4rem;
  }
`;

export const Content = styled.section`
  grid-area: content;
  max-width: 136.8rem;
  margin: 0 auto;
  display: flex;
  gap: 32rem;

  .total {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GREY_200};
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GREY_200};
  }
`;

export const List = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 3.2rem 0 2rem 0;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    object-fit: cover;
  }
  > div {
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GREY_200};
      margin-right: 1rem;
    }
    strong {
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GREY_300};
    }
    button {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BUTTON_DELETE};
    }
  }
`;

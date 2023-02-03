import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 7.7rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  width: 122rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      opacity: 0.3;
    }

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 29px;
      color: rgba(255, 255, 255, 0.3);
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 18px;
      font-family: "DM Sans";
    }
  }
`;

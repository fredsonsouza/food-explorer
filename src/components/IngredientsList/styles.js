import styled from "styled-components";

export const Container = styled.ul`
  > div {
    display: flex;
    align-items: center;
    gap: 4rem;

    li {
      display: grid;
      grid-auto-flow: row;
      gap: 0.8rem;

      span {
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
      img {
        width: 6.4rem;
        height: 6.1rem;
        background-size: cover;
      }
    }
  }
`;

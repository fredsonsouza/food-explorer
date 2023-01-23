import styled from "styled-components";

export const Container = styled.section`
  margin: 4rem auto;

  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

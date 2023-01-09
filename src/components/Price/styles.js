import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.7rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

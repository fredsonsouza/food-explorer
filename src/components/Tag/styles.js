import styled from "styled-components";

export const Container = styled.span`
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  margin-right: 2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG_INGREDIENT};
`;

import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 5.6rem;
  border: 0;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;

  &disabled {
    opacity: 0.5;
  }
`;

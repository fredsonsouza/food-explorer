import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_ADD};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 4.8rem;
  border: 0;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;

  &disabled {
    opacity: 0.5;
  }
`;

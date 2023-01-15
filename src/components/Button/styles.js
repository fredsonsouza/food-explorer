import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 5.6rem;
  border: 0;
  padding: 0 3.2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;

  &disabled {
    opacity: 0.5;
  }
`;

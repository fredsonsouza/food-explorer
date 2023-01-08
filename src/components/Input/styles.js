import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 0.5rem;

  > input {
    display: flex;

    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;

    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    &placeholder {
      display: flex;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;

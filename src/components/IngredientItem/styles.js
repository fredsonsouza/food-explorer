import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  width: 11.8rem;
  height: 3.2rem;
  padding: 1.6rem;

  border-radius: 0.8rem;
  display: flex;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.TAG};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_400}` : "none"};

  > input {
    max-width: 7rem;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    border: none;
    outline: none;
  }
  button {
    display: flex;
    background: none;
    border: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;

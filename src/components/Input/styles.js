import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
    border: 0;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    &placeholder {
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;

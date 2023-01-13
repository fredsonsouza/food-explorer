import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};

  input {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;

    &placeholder {
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;

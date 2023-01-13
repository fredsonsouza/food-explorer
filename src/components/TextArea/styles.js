import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  border: 1px solid #ffffff;
  border-radius: 5px;

  background: transparent;
  font-size: 1.6rem;
  padding: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  &placeholder {
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;

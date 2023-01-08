import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
`;

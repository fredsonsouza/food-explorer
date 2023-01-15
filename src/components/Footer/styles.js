import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 7.7rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 136.8rem;
  align-items: center;
  margin: 0 auto;
`;

import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12.3rem;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 3.2rem;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > svg {
    width: 3rem;
    height: 3rem;
  }

  > h1 {
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  input {
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 0.5rem;
    padding: 1.6rem;

    border: 0;
  }
`;
export const Logout = styled.button`
  width: 3rem;
  height: 3rem;
`;

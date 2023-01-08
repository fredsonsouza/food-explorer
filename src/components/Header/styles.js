import styled from "styled-components";
import signOut from "../../assets/SignOut.svg";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12.4rem;
`;
export const Content = styled.div`
  max-width: 136.8rem;
  margin: 0 auto;
  display: flex;
  flex: 1;
  align-items: center;
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

  > svg {
    width: 3rem;
    height: 3rem;
    margin-right: 1.2rem;
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

  svg {
    margin-left: 1rem;
  }
`;
export const Logout = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 2.8rem;
    height: 2.8rem;
  }
`;

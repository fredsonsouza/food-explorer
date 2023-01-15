import styled from "styled-components";

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
  flex: 1;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin: 0 auto;
  justify-content: space-between;

  > nav {
    width: 80%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > div {
    display: flex;
    align-items: center;
    width: 20%;
    gap: 1rem;
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
export const Search = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 0.5rem;

  input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
    border: none;
    outline: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
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

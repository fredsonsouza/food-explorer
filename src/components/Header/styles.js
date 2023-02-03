import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  max-width: 122rem;
  align-items: center;
  flex: 1;
  gap: 3.2rem;
  margin: 0 auto;
  justify-content: space-between;

  > nav {
    width: 80%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  > div {
    display: flex;
    align-items: center;
    width: 26%;
    gap: 3.1rem;
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding-bottom: 1rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  strong {
    position: absolute;
    font-style: normal;
    font-weight: 400;
    top: 22.5px;
    left: 147px;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 0.5rem;

  > input {
    width: 100%;
    border: 0;
    outline: 0;
    height: 4.8rem;
    padding: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
  img {
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

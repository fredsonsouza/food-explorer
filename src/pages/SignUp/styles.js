import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30rem;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 7.2rem;
    line-height: 50px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > svg {
    width: 4rem;
    height: 4rem;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 47.6rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  padding: 6.4rem;
  border-radius: 1.6rem;
  gap: 3rem;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  input {
    width: 100%;
    border: 0;
    height: 4.8rem;
    padding: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }

  h2 {
    font-style: normal;
    text-align: center;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }
  button {
    img {
      display: none;
    }
  }
`;

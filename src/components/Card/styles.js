import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 2.7rem;
  li {
    display: grid;
    place-items: center;
    border-radius: 0.8rem;
    gap: 1.7rem;
    padding: 1rem 2rem 4rem 2rem;
    max-width: 30rem;
    background: rgba(0, 0, 0, 0.32);
  }
  img {
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
  }
  .pencil {
    margin-left: 200px;
    button {
      border: none;
      background: transparent;
    }
    img {
      width: 2.4rem;
      height: 2.2rem;
      margin-left: auto;
    }
  }
  .info {
    display: grid;
    place-items: center;
    gap: 1rem;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    strong {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  .counter {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      border: none;
      background: rgba(0, 0, 0, 0.32);
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

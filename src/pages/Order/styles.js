import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 10.5rem auto 7.7rem;

  grid-template-areas:
    "header"
    "content"
    "footer";

  header input {
    border: 0;
    outline: 0;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    margin-bottom: 3.2rem;
    color: ${({ theme }) => theme.COLORS.GREY_200};
  }
`;

export const Content = styled.section`
  grid-area: content;
  display: flex;
  align-items: flex-start;
  gap: 25rem;
  max-width: 122rem;
  margin: 3.4rem auto 0 auto;
`;

export const List = styled.div`
  display: grid;

  ul {
    display: grid;
    gap: 3.6rem;
    border: 1px solid blue;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;

      > div {
        span {
          font-style: normal;
          font-weight: 500;
          font-size: 2rem;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.GREY_200};
        }
        strong {
          font-style: normal;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.GREY_300};
          margin-left: 1rem;
        }
        button {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          li {
            display: flex;
            align-items: center;
            gap: 1rem;

            > div {
              span {
                font-style: normal;
                font-weight: 500;
                font-size: 2rem;
                line-height: 160%;
                color: ${({ theme }) => theme.COLORS.GREY_200};
              }
              strong {
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 160%;
                color: ${({ theme }) => theme.COLORS.GREY_300};
                margin-left: 1rem;
              }
              button {
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 160%;
                color: ${({ theme }) => theme.COLORS.BUTTON_DELETE};
              }
            }
          }
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.BUTTON_DELETE};
        }
      }
    }
  }

  img {
    width: 7.2rem;
    object-fit: cover;
  }
  .total {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GREY_200};
    margin-top: 1.6rem;
  }
`;
export const Payment = styled.div`
  display: grid;
  width: 53rem;

  .payment-type {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .payment-type div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 3.2rem 10rem;
  }

  .credit-card {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }

  .payment-type button {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    font-family: "Roboto";
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
export const Form = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 3rem;
  padding: 4rem 6rem 6rem 6rem;

  input {
    margin-top: 0.8rem;
  }
  .col-1 {
    display: flex;
  }
  .col-1 > div {
    width: 100%;
  }
  .col-2 {
    display: flex;
    gap: 1rem;
  }
  .col-2 > div {
    width: 100%;
  }
`;

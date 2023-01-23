import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;

  section {
    display: flex;
    flex-direction: column;
    max-width: 53rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    border: 1px solid rgba(255, 255, 255, 0.1);

    .method {
      border: 1px solid rgba(255, 255, 255, 0.1);
      width: 100%;
      display: flex;
      align-content: center;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    .pix {
      display: flex;
      width: 50%;
      height: 100%;
      border-top-left-radius: 0.5rem;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */

      align-items: center;

      button {
        display: flex;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        padding: 3.2rem 10rem;
        font-family: "Roboto";
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
    .card {
      width: 50%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-top-right-radius: 0.5rem;

      button {
        display: flex;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        padding: 3.2rem 10rem;
        font-family: "Roboto";
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;
export const PaymentType = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
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
export const QRCODE = styled.div`
  display: none;
  > div {
    display: flex;
    justify-content: center;
    padding: 6rem 15.7rem;

    img {
      object-fit: cover;
    }
  }
`;

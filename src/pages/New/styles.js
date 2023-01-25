import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 7.8rem;

  grid-template-areas:
    "header"
    "Content"
    "footer";

  > header {
    input {
      border: 0;
      outline: 0;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 122rem;
  margin: 3.2rem auto 0 auto;
`;

export const Form = styled.form`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 3.2rem;

  input {
    margin-top: 0.8rem;
  }

  textarea {
    margin-top: 0.8rem;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
  }
  button {
    width: 35.7rem;
    height: 4.8rem;
    border: 1px solid #ffffff;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: rgba(255, 255, 255, 0.1);
    margin-left: auto;
  }
  .col-2 {
    display: flex;
    gap: 2rem;
  }

  .col-2-2 {
    display: flex;
    gap: 2rem;
  }
  .col-2-2 > div {
    width: 100%;
  }
  .col-2 > div {
    width: 100%;
  }
  .col-2 > div:nth-child(1) {
    width: 36rem;
  }
  .col-2-2 > div:nth-child(2) {
    width: 29rem;
  }
`;

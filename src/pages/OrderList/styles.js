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
  input {
    outline: 0;
  }
`;
export const Content = styled.div`
  grid-area: content;
  max-width: 136.8rem;
  margin: 3.5rem auto 0 auto;

  display: grid;

  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    margin-bottom: 3.5rem;
  }
`;

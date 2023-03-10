import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;

  grid-template-rows: 10.5rem auto 7.8rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
export const Content = styled.div`
  grid-area: content;
  max-width: 122rem;
  margin: 0 auto;
`;
export const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.8rem;
  margin-top: 16rem;
  height: 26rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  position: relative;

  img {
    position: absolute;
    /* border: 1px solid blue; */
    object-fit: contain;
    width: 65rem;
    height: 38rem;
    top: -12rem;
    left: -8rem;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

export const Dishes = styled.ul``;

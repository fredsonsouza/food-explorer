import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > button:last-child {
    margin-left: 2rem;
  }
`;

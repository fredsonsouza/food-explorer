import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #192227;
    text-align: left;

    th:first-child {
      border-top-left-radius: 0.4rem;
    }

    th:last-child {
      border-top-right-radius: 0.4rem;
    }
    th {
      border: 2px solid #192227;
      padding: 2.1rem;
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    td {
      padding: 2.1rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      border: 2px solid #192227;
    }
  }
`;

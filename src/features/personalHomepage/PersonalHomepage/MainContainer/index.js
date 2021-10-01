import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 12px;
  }
`;
import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-top: 115px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center ;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
    grid-gap: 0;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  display: block;
  border-radius: 250px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 136px;
    max-height: 136px;
  }
`;
import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.lightMode.white};
  padding: 32px;
  margin: 72px 0;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 48px 0;
    padding: 16px;
  }
`;

export const Title = styled.header`
  font-weight: 900;
  font-size: 30px;
  padding: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightMode.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    padding-bottom: 12px;
  }
`;

export const List = styled.ul`
  padding: 32px 0 0 32px;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightMode.mainAccent};
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      grid-template-columns: 1fr;
      padding: 12px 0 0 16px;
  }
`;

export const Item = styled.li``;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.lightMode.textSecondary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;


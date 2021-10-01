import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
  display: flex;
  flex-direction: column;

  &:hover{
      border: 6px solid rgba(3, 102, 214, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 24px;
    width: 100%;
  }
`;

export const Header = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.mainAccent};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    margin: 16px 0;
  }
`;

export const Label = styled.span`
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.mainAccent};
  line-height: 1.4;
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.teil.background};
  border: 6px solid ${({ theme }) => theme.colors.teil.border};
  box-shadow: ${({ theme }) => theme.colors.teil.boxShadow};
  border-radius: 4px;
  padding: 56px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  &:hover{
      border-color: ${({ theme }) => theme.colors.teil.hover};
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
  color: ${({ theme }) => theme.colors.teil.title};

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
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainAccent};
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;
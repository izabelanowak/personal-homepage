import styled, { css } from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.mainAccent};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 19px;
  align-items: center;
  transition: 0.3s;

  &:hover {
      box-shadow: ${({ theme }) => theme.colors.button.boxShadow.hover};
  }

  &:active {
      box-shadow: ${({ theme }) => theme.colors.button.boxShadow.active};
  }

  ${({ error }) => error && css`
      grid-gap: 0;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

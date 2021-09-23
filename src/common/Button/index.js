import styled, { css } from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.lightMode.mainAccent};
  color: ${({ theme }) => theme.colors.lightMode.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 19px;
  align-items: center;

  &:hover {
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
  }

  &:active {
      box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  ${({ error }) => error && css`
      grid-gap: 0;
  `}
`;

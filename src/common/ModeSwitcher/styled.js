import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightMode.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      display: none;
    }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
`;
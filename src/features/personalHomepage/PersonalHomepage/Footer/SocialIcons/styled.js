import styled from "styled-components";

export const List = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
&:not(:last-child) {
  margin-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-right: 16px;
  }
}
`;

export const Link = styled.a`

`;

export const styleIcon = Icon => styled(Icon)`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    fill: ${({ theme }) => theme.colors.mainAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

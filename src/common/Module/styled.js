import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ footer }) => footer && css`
    margin-bottom: 100px;
  `}
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightMode.textSecondary};
`;

export const Title = styled.header`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.lightMode.textPrimary};

  ${({ footer }) => footer && css`
    font-size: 32px;
    line-height: 39px;

    &:hover {
      color: ${({ theme }) => theme.colors.lightMode.mainAccent};
    }
  `}
`;

export const Description = styled.p`
  margin: 35px 0 32px 0;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.lightMode.textSecondary};

  ${({ footer }) => footer && css`
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.lightMode.textPrimary};
  `}
`;

export const Extra = styled.div`
  display: flex;
`;


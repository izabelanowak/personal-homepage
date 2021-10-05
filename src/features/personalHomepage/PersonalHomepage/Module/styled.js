import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ footer }) => footer && css`
    margin-bottom: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin-bottom: 32px;
    }
  `}
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 12px 0;

  ${({ footer }) => footer && css`
    margin: 0 0 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin: 0 0 12px 0;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0 0 8px 0;
  }
`;

export const Title = styled.header`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
  }

  ${({ footer }) => footer && css`
    font-size: 32px;
    line-height: 1.2;

    &:hover {
      color: ${({ theme }) => theme.colors.mainAccent};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 17px;
    }
  `}
`;

export const Description = styled.p`
  margin: 36px 0 32px 0;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
    margin: 16px 0 24px 0;
  }

  ${({ footer }) => footer && css`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 14px;
      margin: 12px 0 40px 0;
  }
    }
  `}
`;

export const Extra = styled.div`
  display: flex;
`;


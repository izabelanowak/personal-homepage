import styled from "styled-components";
import { ReactComponent as GitHubLogoLM } from "../icons/GitHubLM.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 48px;
  }
`;

export const Logo = styled(GitHubLogoLM)`
  margin: 0 0 12px 0;
  fill: ${({ theme }) => theme.colors.lightMode.mainAccent};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 1.2;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    margin: 0 0 16px 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
  }
`;
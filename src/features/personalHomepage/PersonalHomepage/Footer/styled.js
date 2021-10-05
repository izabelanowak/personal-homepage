import styled from "styled-components";
import { ReactComponent as GitHubLogoLM } from "../icons/GitHubLM.svg";
import { ReactComponent as LinkedinLogoLM } from "../icons/LinkedinLM.svg";

export const GitHubLogo = styled(GitHubLogoLM)`
  width: 48px;
  height: 48px;
  margin-right: 24px;
  fill: ${({ theme }) => theme.colors.textPrimary};
  transition: 0.3s;

  &:hover {
    fill: ${({ theme }) => theme.colors.mainAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

export const LinkedinLogo = styled(LinkedinLogoLM)`
  width: 48px;
  height: 48px;
  margin-right: 24px;
  fill: ${({ theme }) => theme.colors.textPrimary};
  transition: 0.3s;

  &:hover {
    fill: ${({ theme }) => theme.colors.mainAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;
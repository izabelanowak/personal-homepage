import styled from "styled-components";
import { ReactComponent as GitHubLogoLM } from "../icons/GitHubLM.svg";
import { ReactComponent as LinkedinLogoLM } from "../icons/LinkedinLM.svg";

export const GitHubLogo = styled(GitHubLogoLM)`
    width: 48px;
    height: 48px;
    margin-right: 24px;
    fill: ${({ theme }) => theme.colors.lightMode.textPrimary};

    &:hover {
      fill: ${({ theme }) => theme.colors.lightMode.mainAccent};
    }
`;

export const LinkedinLogo = styled(LinkedinLogoLM)`
    width: 48px;
    height: 48px;
    margin-right: 24px;
    fill: ${({ theme }) => theme.colors.lightMode.textPrimary};

    &:hover {
      fill: ${({ theme }) => theme.colors.lightMode.mainAccent};
    }
`;
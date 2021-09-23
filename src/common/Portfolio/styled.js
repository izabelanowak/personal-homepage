import styled from "styled-components";
import { ReactComponent as GitHubLogoLM } from "../icons/GitHubLM.svg";

export const Wrapper = styled.div`
    text-align: center;
    margin-bottom: 120px;
`;

export const Logo = styled(GitHubLogoLM)`
    margin: 0 0 13px 0;
    fill: ${({ theme }) => theme.colors.lightMode.mainAccent};
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin: 0 0 8px 0;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin: 0 0 24px 0;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    text-align: left;
`;

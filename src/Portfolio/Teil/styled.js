import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 10px;
    background-color: ${({ theme }) => theme.colors.lightMode.white};
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;
    display: flex;
    flex-direction: column;

    &:hover{
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const Header = styled.h3`
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.colors.lightMode.mainAccent};
`;

export const Description = styled.p`
    margin: 24px 0;
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.lightMode.textSecondary};
`;

export const Label = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.lightMode.textSecondary};
    margin: 8px 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.lightMode.mainAccent};
`;
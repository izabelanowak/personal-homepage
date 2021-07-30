import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Logo = styled.svg`
    margin: 0 0 13px 0;
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
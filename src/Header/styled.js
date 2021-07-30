import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-top: 115px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center ;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    max-width: 400px;
    max-height: 400px;
    display: block;
    border-radius: 250px;
`;
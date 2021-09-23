import { Title, Body, Logo, Paragraph, Wrapper } from "./styled";

const Portfolio = ({ children }) => {
    return (
        <Wrapper>
            <Logo />
            <Title>Portfolio</Title>
            <Paragraph>My recent projects</Paragraph>
            <Body>
                {children}
            </Body>
        </Wrapper>
    );
};

export default Portfolio;
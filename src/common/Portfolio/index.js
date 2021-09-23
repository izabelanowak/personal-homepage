import { Title, Logo, Paragraph, Wrapper } from "./styled";

const Portfolio = ({ children }) => {
    return (
        <Wrapper>
            <Logo />
            <Title>Portfolio</Title>
            <Paragraph>My recent projects</Paragraph>
            {children}
        </Wrapper>
    );
};

export default Portfolio;
import { Title, Body, Logo, Paragraph, Wrapper } from "./styled";
import Teil from "./Teil";

const Portfolio = () => {
    return (
        <Wrapper>
            <Logo/>
            <Title>Portfolio</Title>
            <Paragraph>My recent projects</Paragraph>
            <Body>
                <Teil
                    title="Project 1"
                    description="sialalalallalala"
                    demoLink="#"
                    codeLink="#"
                />
                <Teil
                    title="Project 2"
                    description="sialalalallalala"
                    demoLink="#"
                    codeLink="#"
                />
            </Body>
        </Wrapper>
    );
};

export default Portfolio;
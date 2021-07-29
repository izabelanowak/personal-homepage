import { Title, Body, Logo, Paragraph } from "./styled";
import Teil from "./Teil";

const Portfolio = () => {
    return (
        <>
            <Logo src="../GitHubLogo.svg" alt="GitHub logo"/>
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
        </>
    );
};

export default Portfolio;
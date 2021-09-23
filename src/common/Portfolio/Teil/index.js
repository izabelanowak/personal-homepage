import { Description, Header, Label, Link, Wrapper } from "./styled";

const Teil = ({ title, description, demoLink, codeLink }) => (
    <Wrapper>
        <Header>
            {title}
        </Header>
        <Description>
            {description}
        </Description>
        <Label>Demo: <Link>{demoLink}</Link></Label>
        <Label>Code: <Link>{codeLink}</Link></Label>
    </Wrapper>
);

export default Teil;
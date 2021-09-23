import { Description, Header, Label, Link, Wrapper } from "./styled";

const Teil = ({ title, description, demoLink, codeLink }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    <Description>
      {description}
    </Description>
    <Label>
      Demo:
      {" "}
      <Link href={demoLink} target="_blank" rel="noreferrer noopener">
        {demoLink}
      </Link>
    </Label>
    <Label>
      Code:
      {" "}
      <Link href={codeLink} target="_blank" rel="noreferrer noopener">
        {codeLink}
      </Link>
    </Label>
  </Wrapper>
);

export default Teil;
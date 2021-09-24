import { Description, Header, Label, Link, Wrapper } from "./styled";

const Teil = ({ title, description, demoLink, codeLink }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    {description ?
      <Description>
        {description}
      </Description>
      : ""}
    <Label>
      Demo:
      {" "}
      <Link href={demoLink} target="_blank" rel="noreferrer noopener">
        {demoLink.slice(8,-1)}
      </Link>
    </Label>
    <Label>
      Code:
      {" "}
      <Link href={codeLink} target="_blank" rel="noreferrer noopener">
        {codeLink.slice(8)}
      </Link>
    </Label>
  </Wrapper>
);

export default Teil;
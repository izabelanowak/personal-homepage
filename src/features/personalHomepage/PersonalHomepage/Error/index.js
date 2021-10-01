import { Button } from "../Button";
import { ReactComponent as ErrorIcon } from "./Danger.svg";
import { Info, Title, Wrapper } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Title>Ooops! Something went wrong… </Title>
      <Info>
        Sorry, failed to load Github projects.
        You can check them directly on Github.
      </Info>
      <a href="https://github.com/izabelanowak" rel="noreferrer noopener" target="_blank">
        <Button error={true}>Go to Github</Button>
      </a>
    </Wrapper>
  );
};
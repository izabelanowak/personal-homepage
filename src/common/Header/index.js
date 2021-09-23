import { Button } from "../Button";
import Module from "../Module";
import { Image, StyledHeader, Wrapper } from "./styled";
import { ReactComponent as MessageLogo } from "./message.svg";
import photo from "./iza.jpg";
import ToggleModeButton from "./ModeSwitcher";

const Header = () => (
  <StyledHeader>
    <Image src={photo} alt="Izabela Nowak" />
    <Wrapper>
      <ToggleModeButton />
      <Module
        text="This is"
        title="Izabela Nowak"
        description="Hi! I'm future Frontend Developer with passion about CSS, React and in love with Styled-components."
        extraContent={
          <a href="mailto: nowak.izabela.ni@gmail.com">
            <Button><MessageLogo />Hire me</Button>
          </a>
        }
      />
    </Wrapper>
  </StyledHeader>
);

export default Header;
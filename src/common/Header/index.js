import { Button } from "../Button";
import Module from "../Module";
import { Image, StyledHeader, Wrapper } from "./styled";
import messageLogo from "./message.svg";
import photo from "./iza.jpg";
import ToggleModeButton from "./ToggleModeButton";


const Header = () => (
    <StyledHeader>
        <Image src={photo} alt="Izabela Nowak"/>
       <Wrapper>
       <ToggleModeButton/>
        <Module
          text="This is"
          title="Izabela Nowak"
          description="Hi! I'm future Frontend Developer with passion about CSS, React and in love with Styled-components."
          extraContent={
            <Button><img src={messageLogo} alt="Message Logo" />Hire me</Button>
          }
        />
       </Wrapper>
    </StyledHeader>
);

export default Header;
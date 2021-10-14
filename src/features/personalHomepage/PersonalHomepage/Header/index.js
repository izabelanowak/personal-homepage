import { Button } from "../Button";
import Module from "../Module";
import { Image, StyledHeader, Wrapper } from "./styled";
import { ReactComponent as MessageIcon } from "./message.svg";
import photo from "./iza.jpg";
import { email } from "../personalData";

const Header = () => (
  <StyledHeader>
    <Image src={photo} alt="Izabela Nowak" />
    <Wrapper>
      <Module
        text="This is"
        title="Izabela Nowak"
        description="I am a frontend developer with passion about CSS, React and in love with Styled-components. I am conscientious and I am not afraid of challenges.
        I like to solve logical problems. I have experience working in a group and feel comfortable writing the code myself."
        extraContent={
          <a href={`mailto: ${email}`}>
            <Button><MessageIcon />Hire me</Button>
          </a>
        }
      />
    </Wrapper>
  </StyledHeader>
);

export default Header;
import { Button } from "./Button";
import { skillset, whatToLearnNext } from "./lists";
import Module from "./Module";
import Portfolio from "./Portfolio";
import Section from "./Section";
import messageLogo from './message.svg';

function App() {
  return (
    <>
      <header>
        <Module
          text="This is"
          title="Izabela Nowak"
          description="Hi! I'm future Frontend Developer with passion about CSS, React and in love with Styled-components"
          extraContent={
            <Button><img src={messageLogo} alt="Message Logo" /> Hire me</Button>
          }
        />
      </header>
      <Section
        title="My skillset includes"
        list={skillset}
      />
      <Section
        title="What I want to learn next"
        list={whatToLearnNext}
      />
      <Portfolio />
    </>
  );
};

export default App;

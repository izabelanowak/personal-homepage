import { skillset, whatToLearnNext } from "./lists";
import Section from "./Section";

function App() {
  return (
    <>
      <Section
        title="My skillset includes"
        list={skillset}
      />
      <Section
        title="What I want to learn next"
        list={whatToLearnNext}
      />
    </>
  );
}

export default App;

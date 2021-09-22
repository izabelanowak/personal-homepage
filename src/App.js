import { skillset, whatToLearnNext } from "./lists";
import Portfolio from "./Portfolio";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header/>
      <Section
        title="My skillset includes"
        list={skillset}
      />
      <Section
        title="What I want to learn next"
        list={whatToLearnNext}
      />
      <Portfolio />
      <Footer/>
    </>
  );
};

export default App;

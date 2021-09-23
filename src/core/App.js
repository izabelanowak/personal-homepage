import { skillset, whatToLearnNext } from "../lists";
import Portfolio from "../common/Portfolio";
import Section from "../common/Section";
import Header from "../common/Header";
import Footer from "../common/Footer";

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

import { skillset, whatToLearnNext } from "../lists";
import ModeSwitcher from "../common/ModeSwitcher";
import Portfolio from "../common/Portfolio";
import Section from "../common/Section";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Projects from "../features/homepage/Projects";

function App() {
  return (
    <>
      <ModeSwitcher />
      <Header />
      <Section
        title="My skillset includes"
        list={skillset}
      />
      <Section
        title="What I want to learn next"
        list={whatToLearnNext}
      />
      <Portfolio>
        <Projects />
      </Portfolio>
      <Footer />
    </>
  );
};

export default App;

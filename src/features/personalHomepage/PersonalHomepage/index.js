import { skillset, whatToLearnNext } from "./lists";
import ModeSwitcher from "../../../common/ModeSwitcher";
import Portfolio from "./Portfolio";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import { MainContainer } from "./MainContainer";

const PersonalHomepage = () => {

  return (
    <>
      <MainContainer>
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
      </MainContainer>
    </>
  );
};

export default PersonalHomepage;
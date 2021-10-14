import { languages, skillset, tools, whatToLearnNext } from "./lists";
import ThemeSwitcher from "../../../common/ThemeSwitcher";
import Portfolio from "./Portfolio";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import { MainContainer } from "./MainContainer";

const PersonalHomepage = () => {

  return (
      <MainContainer>
        <ThemeSwitcher />
        <Header />
        <Section
          title="My skillset includes"
          list={skillset}
        />
        <Section
          title="Tools I used"
          list={tools}
        />
        <Section
          title="What I want to learn next"
          list={whatToLearnNext}
        />
         <Section
          title="Languages"
          list={languages}
        />
        <Portfolio>
          <Projects />
        </Portfolio>
        <Footer />
      </MainContainer>
  );
};

export default PersonalHomepage;
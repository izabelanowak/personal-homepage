import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './core/App/GlobalStyle';
import { themeDark, themeLight } from "./core/App/theme";
import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;

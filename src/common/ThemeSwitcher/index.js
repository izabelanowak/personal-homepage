import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsDarkTheme, toogleTheme } from "../themeSlice";
import darkModeButton from "./darkModeButton.svg";
import lightModeButton from "./lightModeButton.svg";
import { Button, Label, Wrapper } from "./styled";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Label>
        Dark mode {isDarkTheme ? "on" : "off"}
      </Label>
      <Button onClick={() => dispatch(toogleTheme())}>
        {<img src={isDarkTheme ? darkModeButton : lightModeButton} alt="theme switcher" />}
      </Button>
    </Wrapper>
  );
}

export default ThemeSwitcher;
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsDarkTheme, toogleTheme } from "../themeSlice";
import { Box, Button, Icon, IconWrapper, Label, Wrapper } from "./styled";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toogleTheme())}>
        <Label>
          Dark mode {isDarkTheme ? "on" : "off"}
        </Label>
        <Box>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
}

export default ThemeSwitcher;
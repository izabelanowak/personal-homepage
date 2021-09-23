import { useState } from "react";
import darkModeButton from "./darkModeButton.svg";
import lightModeButton from "./lightModeButton.svg";
import { Button, Label, Wrapper } from "./styled";

const ToggleModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = mode => setDarkMode(!mode);

  return (
    <Wrapper>
      <Label>
        {darkMode ? "Dark mode on" : "Dark mode off"}
      </Label>
      <Button onClick={() => toggleMode(darkMode)}>
        {<img src={darkMode ? darkModeButton : lightModeButton} alt="toggle mode button" />}
      </Button>
    </Wrapper>
  );
}

export default ToggleModeButton;
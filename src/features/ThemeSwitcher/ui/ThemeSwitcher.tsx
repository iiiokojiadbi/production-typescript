import {Theme, useTheme} from "@app/providers/ThemeProvider";
import MoonIcon from "@shared/assets/icons/moon-filled.svg";
import SunIcon from "@shared/assets/icons/sun-filled.svg";
import {classNames} from "@shared/lib/classNames";
import {Button, ButtonTheme} from "@shared/ui/Button";
import type {FC} from "react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const {theme, toggleTheme} = useTheme();
  const {className} = props;

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", [className])}
      onClick={toggleTheme}>
      {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeSwitcher;

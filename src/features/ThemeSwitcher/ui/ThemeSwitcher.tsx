import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames";

import { Button, ButtonTheme } from "shared/ui/Button";

import SunIcon from "shared/assets/icons/sun-filled.svg";
import MoonIcon from "shared/assets/icons/moon-filled.svg";

import { FC } from "react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <MoonIcon /> : <SunIcon color="white" />}
    </Button>
  );
};

export default ThemeSwitcher;

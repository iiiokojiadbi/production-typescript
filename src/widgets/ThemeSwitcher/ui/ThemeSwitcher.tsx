import { useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import SunIcon from "shared/assets/icons/sun-filled.svg";
import MoonIcon from "shared/assets/icons/moon-filled.svg";

import { FC } from "react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;

  console.log(SunIcon);
  console.log(MoonIcon);

  return (
    <button
      className={classNames(cls.ThemeSwitcher, [className])}
      onClick={toggleTheme}
    >
      <SunIcon />
    </button>
  );
};

export default ThemeSwitcher;

import {useContext} from "react";

import type {IThemeContextProps} from "./ThemeContext";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

function useTheme(): IUseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext) as IThemeContextProps;

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {theme, toggleTheme};
}

export default useTheme;

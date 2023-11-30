import type {FC} from "react";
import {useLayoutEffect, useMemo, useState} from "react";

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps {
  initTheme?: Theme;
}

const themeColor = {
  [Theme.LIGHT]: "#728d74",
  [Theme.DARK]: "#27374d",
} as const;

const metaTheme = document.querySelector('meta[name="theme-color"]');

const setThemeGlobally = (theme: Theme): void => {
  document.body.className = theme;

  if (metaTheme != null) {
    metaTheme.setAttribute("content", themeColor[theme]);
  }
};

const ThemeProvider: FC<ThemeProviderProps> = props => {
  const {children, initTheme} = props;

  const [theme, setTheme] = useState<Theme>(initTheme ?? defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useLayoutEffect(() => {
    setThemeGlobally(theme);
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

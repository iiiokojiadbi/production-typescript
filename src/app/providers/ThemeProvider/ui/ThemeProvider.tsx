import type {FC} from "react";
import {useLayoutEffect, useMemo, useState} from "react";

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const themeColor = {
  [Theme.LIGHT]: "#728d74",
  [Theme.DARK]: "#27374d",
};

const metaTheme = document.querySelector('meta[name="theme-color"]');

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps {
  initTheme?: Theme;
}

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
    if (metaTheme != null) metaTheme.setAttribute("content", themeColor[theme]);
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

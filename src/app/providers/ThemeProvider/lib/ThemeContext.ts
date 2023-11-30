import {createContext} from "react";

export enum Theme {
  LIGHT = "app_theme_light",
  DARK = "app_theme_dark",
}

export interface IThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  setThemeGlobally: (theme: Theme) => void;
}

export const ThemeContext = createContext({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

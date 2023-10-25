import { Link } from "react-router-dom";
import "app/styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button type="button" onClick={toggleTheme}>
        BUTTON
      </button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <AppRouter />
    </div>
  );
}

export default App;

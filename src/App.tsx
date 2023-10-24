import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button type="button" onClick={toggleTheme}>
        BUTTON
      </button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<div>ABOUT</div>} />
          <Route path={"/main"} element={<div>MAIN</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

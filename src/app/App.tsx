import "@app/styles/index.scss";

import {AppRouter} from "@app/providers/router";
import {useTheme} from "@app/providers/ThemeProvider";
import {classNames} from "@shared/lib/classNames";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar";
import type {FC} from "react";
import {Suspense} from "react";

const App: FC = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export {App};

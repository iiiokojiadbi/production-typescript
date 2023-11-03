import {Route, Routes} from "react-router-dom";

import type {FC} from "react";
import {Suspense} from "react";

import {routeConfig} from "@shared/config/routerConfig";
import {PageLoader} from "@widgets/PageLoader";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

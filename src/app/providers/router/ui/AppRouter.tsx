import { Route, Routes } from 'react-router-dom';

import type { FC } from 'react';
import { Suspense } from 'react';

import { routeConfig } from '@shared/config/routerConfig';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
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

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BaseLayout } from 'layout/baseLayout';
import { DetailLayout } from 'layout/detailLayout';
import Spinner from 'components/Spinner';

const Home = React.lazy(() => import('pages/home'));
const WeatherDetail = React.lazy(() => import('pages/weatherDetail'));

const pathes = {
  home: '/',
  weatherDetailId: '/detail/:id',
};

export const Routing = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route
        path={pathes.home}
        element={
          <React.Suspense fallback={<Spinner />}>
            <Home />
          </React.Suspense>
        }
      />
    </Route>
    <Route element={<DetailLayout />}>
      <Route
        path={pathes.weatherDetailId}
        element={
          <React.Suspense fallback={<Spinner />}>
            <WeatherDetail />
          </React.Suspense>
        }
      />
    </Route>
  </Routes>
);

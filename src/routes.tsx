import React from 'react';

const IndexView = React.lazy(() => import('./views/IndexView'));
const NotFound = React.lazy(() => import('./views/NotFound'));

const routes = [
  {
    path: '/',
    element: <IndexView />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
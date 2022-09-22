import React from 'react';

const IndexView = React.lazy(() => import('./views/IndexView'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const LegalNoticeView = React.lazy(() => import('./views/LegalNoticeView'));


const routes = [
  {
    path: '/',
    element: <IndexView />,
  },
  {
    path: '/mentions-legales',
    element: <LegalNoticeView />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
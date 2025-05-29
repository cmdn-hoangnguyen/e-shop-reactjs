import React from 'react';

const ErrorSection = React.lazy(() => import('./containers/ErrorSection'));

const notFoundRoutes = [
  {
    path: '/404',
    element: ErrorSection,
  },
];
export default notFoundRoutes;

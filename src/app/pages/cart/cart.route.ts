import React from 'react';

const Cart = React.lazy(() => import('./containers/Cart'));

const cartRoutes = [
  {
    path: '/cart',
    element: Cart,
  },
];

export default cartRoutes;

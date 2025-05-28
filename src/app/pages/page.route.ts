import React from 'react';

import cartRoutes from './cart/cart.route';
import notFoundRoutes from './error/error.routes';
import homeRoutes from './home/home.route';

const Page = React.lazy(() => import('./Page'));

const pageRoutes = [
  {
    path: '/',
    element: Page,
    children: [...homeRoutes, ...cartRoutes, ...notFoundRoutes],
  },
];

export default pageRoutes;

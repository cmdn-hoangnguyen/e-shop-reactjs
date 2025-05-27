import React from "react";

const NotFound = React.lazy(() => import("./containers/NotFound"));

const notFoundRoutes = [
  {
    path: "/404",
    element: NotFound,
  },
];
export default notFoundRoutes;

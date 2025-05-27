import React from "react";
import homeRoutes from "./home/home.route";
import cartRoutes from "./cart/cart.route";
import notFoundRoutes from "./notFound/ notFound.routes";

const Page = React.lazy(() => import("./Page"));

const pageRoutes = [
  {
    path: "/",
    element: Page,
    children: [...homeRoutes, ...cartRoutes, ...notFoundRoutes],
  },
];

export default pageRoutes;

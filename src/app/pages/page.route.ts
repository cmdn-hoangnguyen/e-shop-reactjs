import React from "react";
import homeRoutes from "./home/home.route";
import cartRoutes from "./cart/cart.route";

const Page = React.lazy(() => import("./Page"));

const pageRoutes = [
  {
    path: "/",
    element: Page,
    children: [...homeRoutes, ...cartRoutes],
  },
];

export default pageRoutes;

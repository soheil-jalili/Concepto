import { RouteObject } from "react-router-dom";
import Index from "./pages/Index/Index";
import Search from "./pages/Search/Search";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "/search/:slug",
    element: <Search />,
  },
];

export default routes;

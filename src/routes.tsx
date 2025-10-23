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

  {
    path: "/account/",
    children: [
      {
        path: "signup",
        element: <h1>signup</h1>,
      },
      {
        index: true,
        element: <h1>signup</h1>,
      },
    ],
  },
];

export default routes;

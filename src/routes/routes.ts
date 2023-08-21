import BaseLayout from "../layout/baseLayout";
import PageLayout from "../layout/pagelayout";

import Login from "../app/pages/login/login";
import Other from "../app/pages/other";

export const Routes = [
  {
    layout: BaseLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/login",
        isPublic: true,
      },
    ],
  },
  {
    layout: PageLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: Other,
        path: "/home",
      },
    ],
  },
];

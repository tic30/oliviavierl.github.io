/** Route definitions for the navbar and page rendering. */

import DashboardIcon from "@mui/icons-material/Dashboard";
import type { Theme } from "@mui/material/styles";
import type { NavigationRoute } from "types/site";

// Pages
import About from "pages/About";
import LandingPage from "pages/LandingPage";

import getShowcases from "showcases.routes";

const getRoutes = (theme: Theme): NavigationRoute[] => [
  {
    name: "home",
    route: "/",
    key: "home",
    component: <LandingPage />,
  },
  {
    name: "projects",
    icon: <DashboardIcon fontSize="small" />,
    collapse: getShowcases(theme),
  },
  {
    name: "about",
    route: "/about",
    key: "about",
    component: <About />,
  },
];

export default getRoutes;

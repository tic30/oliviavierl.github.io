import { useEffect } from "react";
import type { ReactNode } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "assets/theme";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { SnackbarProvider } from "components/SnackbarProvider";
import getRoutes from "routes";
import type { NavigationRoute } from "types/site";

function AppRoutes() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const renderRoutes = (allRoutes: NavigationRoute[]): ReactNode =>
    allRoutes.map((route: NavigationRoute) => {
      if (route.collapse) {
        return renderRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <>
      <Navbar />
      <Routes>
        {renderRoutes(getRoutes(theme))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <AppRoutes />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

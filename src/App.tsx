import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "ui/system";
import { CssBaseline } from "ui/system";

// Material Kit 2 React themes
import theme from "assets/theme";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import footerRoutes from "footer.routes";

// Material Kit 2 React routes
import getRoutes from "routes";
import { resumeUrl } from "./constants";

function AppRoutes() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const renderRoutes = (allRoutes) =>
    allRoutes.map((route) => {
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
      <Navbar
        sticky
        action={{
          type: "external",
          route: resumeUrl,
          label: "resume",
          color: "primary",
        }}
      />
      <Routes>
        {renderRoutes(getRoutes(theme))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer content={footerRoutes} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

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
import routes from "routes";
import { resumeUrl } from "./constants";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer content={footerRoutes} />
    </ThemeProvider>
  );
}

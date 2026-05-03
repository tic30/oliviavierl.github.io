// @mui material components
import { Card } from "base-ui";

// Material Kit 2 React components
import { Box } from "base-ui";
// Images
import bgImage from "assets/img/about_bg.jpeg";

// Author page sections
import Profile from "./sections/Profile";
// import Posts from "./sections/Posts";
import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";

function About() {
  return (
    <>
      <Box sx={{ bgcolor: "common.white" }}>
        <Box
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.1)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "none",
          }}
        >
          <Profile />
          {/* <Posts /> */}
        </Card>
        <Contact />
      </Box>
    </>
  );
}

export default About;

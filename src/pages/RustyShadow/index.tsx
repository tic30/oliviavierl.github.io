import Typography from "@mui/material/Typography";

// Material Kit 2 React components
import { Box } from "ui/system";

// Author page sections
import bgImage from "assets/img/cover2.jpg";
import Intro from "./sections/Intro";
import BrandGuidelines from "./sections/BrandGuidelines";
import Personas from "./sections/Personas";
import ComponentLibrary from "./sections/ComponentLibrary";
import Finals from "./sections/Finals";

function RustyShadow() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            textAlign: "center",
            pt: { xs: "15vh", lg: "30vh" },
            pb: { xs: "5vh", lg: "20vh" },
          }}
        >
          <Typography variant="h1">RustyShadow</Typography>
          <Typography variant="h5" sx={{ mt: 1 }}>
            A Convenient, Full-featured Community for Urban Exploration Lovers
          </Typography>
        </Box>
        <Box component="img" src={bgImage} alt="logo" width="100%" />
        <Intro />
        <BrandGuidelines />
        <ComponentLibrary />
        <Personas />
        <Finals />
      </Box>
    </>
  );
}

export default RustyShadow;

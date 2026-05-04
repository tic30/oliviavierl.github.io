// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Author page sections
import bgImage from "assets/img/cover3.jpg";
import Intro from "./sections/Intro";
import DesignProcess from "./sections/DesignProcess";
import BrandGuidelines from "./sections/BrandGuidelines";
import UserTest from "./sections/UserTest";
import Finals from "./sections/Finals";
import Modifications from "./sections/Modifications";

function ICatcher() {
  return (
    <>
      <Box bgColor="white">
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
          <Typography variant="h1">iCatcher</Typography>
          <Typography variant="h5" mt={1}>
            Better Experience of Sharing Ideas and Manage Inspirations
          </Typography>
        </Box>
        <Box component="img" src={bgImage} alt="logo" width="100%" />
        <Intro />
        <DesignProcess />
        <BrandGuidelines />
        <UserTest />
        <Modifications />
        <Finals />
      </Box>
    </>
  );
}

export default ICatcher;

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { motion } from "motion/react";

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
      <Box sx={{ bgcolor: "background.default" }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
          <Typography variant="h5" sx={{ mt: 1 }}>
            Better Experience of Sharing Ideas and Manage Inspirations
          </Typography>
        </Box>
        <Box
          component={motion.img}
          src={bgImage}
          alt="iCatcher Illustration"
          width="100%"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
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

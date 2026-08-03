// @mui material components
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import { fadeSlideFromRight } from "components/motionPresets";
import SectionHeader from "components/SectionHeader";

// Images
import brandguidelines from "assets/img/brandguidelines.png";

function BrandGuidelines() {
  const theme = useTheme();
  return (
    <Box component="section">
      <SectionHeader
        title="Branding"
        bgColor={`linear-gradient(160deg, ${theme.showcaseColors.grey}, ${theme.palette.common.black})`}
      />
      <Container
        component={motion.div}
        {...fadeSlideFromRight()}
        sx={{ py: 12 }}
      >
        <Box component="img" src={brandguidelines} alt="Brand Guidelines" width="100%" />
      </Container>
    </Box>
  );
}

export default BrandGuidelines;

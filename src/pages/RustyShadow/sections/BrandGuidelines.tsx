// @mui material components
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SectionHeader from "components/SectionHeader";

// Images
import rs1 from "assets/img/rs-typo.png";
import rs2 from "assets/img/rs-logo.png";

const imgSx = {
  mb: 3,
};

const imgs = [rs1, rs2];

function BrandGuidelines() {
  const theme = useTheme();
  return (
    <Box component="section">
      <SectionHeader title="Brand Guidelines" bgColor={theme.showcaseColors.dark} />
      <Container sx={{ py: 12 }}>
        <>
          {imgs.map((img, i) => (
            <Box
              component="img"
              src={img}
              key={`designUpdates-img-${i}`}
              alt="Brand Guidelines"
              width="100%"
              sx={imgSx}
            />
          ))}
        </>
      </Container>
    </Box>
  );
}

export default BrandGuidelines;

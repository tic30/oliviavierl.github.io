// @mui material components
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
      <Container sx={{ py: 12 }}>
        <Box component="img" src={brandguidelines} alt="Brand Guidelines" width="100%" />
      </Container>
    </Box>
  );
}

export default BrandGuidelines;

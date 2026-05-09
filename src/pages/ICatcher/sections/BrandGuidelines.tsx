// @mui material components
import { Container, useTheme } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
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

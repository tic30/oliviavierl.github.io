// @mui material components
import { Container } from "base-ui";

// Material Kit 2 React components
import { Box } from "base-ui";
import SectionHeader from "components/SectionHeader";

// Images
import brandguidelines from "assets/img/brandguidelines.png";
import colors from "assets/theme/base/colors";

function BrandGuidelines() {
  return (
    <Box component="section">
      <SectionHeader
        title="Branding"
        bgColor={`linear-gradient(160deg, ${colors.showcaseColors.grey}, ${colors.black.main})`}
      />
      <Container sx={{ py: 12 }}>
        <Box component="img" src={brandguidelines} alt="Brand Guidelines" width="100%" />
      </Container>
    </Box>
  );
}

export default BrandGuidelines;

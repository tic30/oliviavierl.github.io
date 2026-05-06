// @mui material components
import { Container } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

function SimpleFooter() {
  const { size } = typography;

  return (
    <Container sx={{ my: 1, py: 0 }}>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, design and coded by Yifan Li
        </Box>
      </Box>
    </Container>
  );
}

export default SimpleFooter;

// @mui material components
import { Box, Container } from "@mui/material";

// Material Kit 2 React components
import typography from "assets/theme/base/typography";

function SimpleFooter() {
  const { size } = typography;

  return (
    <Container sx={{ my: 1, py: 0 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: size.sm,
          }}
        >
          &copy; {new Date().getFullYear()}, design and coded by Yifan Li
        </Box>
      </Box>
    </Container>
  );
}

export default SimpleFooter;

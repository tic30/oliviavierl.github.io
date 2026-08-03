import { Box, Container } from "@mui/material";
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;

  return (
    <Box sx={{ backgroundColor: "background.root", overflow: "hidden" }}>
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
    </Box>
  );
}

export default Footer;

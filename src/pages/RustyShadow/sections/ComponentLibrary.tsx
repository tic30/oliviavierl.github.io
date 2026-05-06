// @mui material components
import { Container } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Images
import c0 from "assets/img/moodboard.png";
import c1 from "assets/img/color.png";
import c2 from "assets/img/typo.png";
import c3 from "assets/img/ai.png";

const imgs = [c0, c1, c2, c3];

function ComponentLibrary() {
  return (
    <Box component="section" sx={{ backgroundColor: "showcase.dark" }}>
      <Container sx={{ py: 12, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
            color: "common.white",
          }}
        >
          Component Library
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 12,
            color: "common.white",
          }}
        >
          I created a component library, allowing me to craft the interface of the product with
          speed. This also gives the development team all the basics and variations needed.
        </Typography>
        {imgs.map((img, i) => (
          <Box
            component="img"
            src={img}
            key={`ComponentLibrary-img-${i}`}
            alt="Design Updates"
            width="100%"
          />
        ))}
      </Container>
    </Box>
  );
}

export default ComponentLibrary;

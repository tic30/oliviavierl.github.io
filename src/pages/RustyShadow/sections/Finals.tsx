import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

// @mui material components
import { fadeSlideFromRight } from "components/motionPresets";
import SectionHeader from "components/SectionHeader";

// Images
import rs1 from "assets/img/rs1.png";
import rs2 from "assets/img/rs2.png";
import rs3 from "assets/img/rs3.png";
import rs4 from "assets/img/rs4.png";
import rs5 from "assets/img/rs5.png";
import boxShadows from "assets/theme/base/boxShadows";
import PreviewableImg from "components/PreviewableImg";

const sections = [
  {
    title: "Home Page",
    imgs: [rs1],
  },
  {
    title: "Product List Page",
    imgs: [rs1, rs2, rs3],
  },
  {
    title: "Journal Page",
    imgs: [rs4],
  },
  {
    title: "Guide Page",
    imgs: [rs5],
  },
];

function Finals() {
  const theme = useTheme();
  return (
    <Box component="section">
      <SectionHeader title="Website" bgColor={theme.showcaseColors.dark} />
      <Container component={motion.div} {...fadeSlideFromRight()} sx={{ py: 12 }}>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={3}
          sx={{
            mt: 3,
            mb: 12,
          }}
        >
          {sections.map((section, i) => (
            <Grid size={3} key={`finals-title-${i}`}>
              <Typography variant="body1">{section.title}</Typography>
            </Grid>
          ))}
          {sections.map((section, i) => (
            <Grid size={3} key={`finals-title-${i}`}>
              {section.imgs.map((img, j) => (
                <PreviewableImg
                  src={img}
                  key={`designUpdates-img-${i}-${j}`}
                  alt="Design Updates"
                  sx={{
                    boxShadow: boxShadows.lg,
                    mb: 3,
                  }}
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Finals;

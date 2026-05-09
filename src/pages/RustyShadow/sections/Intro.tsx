import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";

// @mui material components
// Images
import headImg from "assets/img/head.png";
import mindmapImg from "assets/img/mindmap.png";

const sectionTextSx = {
  color: "common.white",
  mb: 3,
};

function Intro() {
  return (
    <Box component="section">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 12,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Problem Statement
        </Typography>
        <Typography variant="body2">
          There are some website that sell products for explorers or articles about urban
          exploration. But there is no such a platform that gather all the urban explore lovers
          together sharing ideas and make friends with same hobby. That’s why Rusty Shadow is
          perfectyly fit these requirments.
        </Typography>
      </Container>
      <Box
        sx={{
          backgroundColor: "showcase.dark",
          py: 10,
        }}
      >
        <Container>
          <Typography variant="h4" sx={sectionTextSx}>
            ► What is Urban Exploration?
          </Typography>
          <Typography variant="body2" sx={{ ...sectionTextSx, mb: 8 }}>
            Urban exploration is the exploration of manmade structures, usually abandoned ruins or
            hidden components of the manmade environment. Photography and historical
            interest/documentation are heavily featured in the hobby.
          </Typography>
          <Typography variant="h4" sx={sectionTextSx}>
            ► Target Audience & Niche Market Opportunity
          </Typography>
          <Typography variant="body2" sx={{ ...sectionTextSx, mb: 1 }}>
            - Target audience are Urban exploration lovers.
          </Typography>
          <Typography variant="body2" sx={sectionTextSx}>
            - This activity is different from normal exploration events. It may presents various
            risks, including both physical danger.
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 12,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          Rusty Shadow Features
        </Typography>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={3}
          sx={{
            mt: 3,
            mb: 12,
            textAlign: "center",
          }}
        >
          <Grid size={4}>
            <Typography variant="body1">✦ E-commerce website</Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body1">✦ Community for Sharing</Typography>{" "}
          </Grid>
          <Grid size={4}>
            <Typography variant="body1">✦ Journal & Blog</Typography>{" "}
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">
              Store that sell the eqiupments and kits for the urban explorers.
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">
              Users can write and publish articles for sharing experiences and exlent works like
              photographs. Aslo in this community, you can follow other people you like and make
              friends.
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">
              Personal page can write journals and upload photo as a record of life.
            </Typography>
          </Grid>
        </Grid>
        <Box component="img" src={headImg} alt="intro image" width="100%" sx={{ mb: 12 }} />
        <Box component="img" src={mindmapImg} alt="mind map image" width="100%" />
      </Container>
    </Box>
  );
}

export default Intro;

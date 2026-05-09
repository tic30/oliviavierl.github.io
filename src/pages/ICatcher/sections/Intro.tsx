import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";

// @mui material components
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
        <Grid
          container
          rowSpacing={3}
          sx={{
            maxWidth: "680px",
            textAlign: "center",
            pb: 3,
            mb: 12,
            border: "2px dashed",
            borderRadius: "10px",
            borderColor: "primary.main",
          }}
        >
          <Grid size={4}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              MY ROLE
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              PROJECT TYPE
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              TIMELINE
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">UI/UX Designer</Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">Individual Project</Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">15 Weeks</Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Problem Statement
        </Typography>
        <Typography variant="body1" sx={{ alignSelf: "flex-start", my: 3 }}>
          Challenge
        </Typography>
        <Typography variant="body2">
          As a Design student, I need to gather inspirations from all the sourses that I attached
          everyday. There are a lot of apps I download in my phone for saving inspiration. Each app
          have folders inside. It's inconvenient to manage them by switching different apps.
        </Typography>
        <Typography variant="body1" sx={{ alignSelf: "flex-start", my: 3 }}>
          Goal
        </Typography>
        <Typography variant="body2">
          My goal is to create an app that can gather all the app for catch inspirations together.
          To build an esay way for managing all the folders from different apps. And also a
          community that people can share interesting ideas and works to others and make friends.
        </Typography>
      </Container>
    </Box>
  );
}

export default Intro;

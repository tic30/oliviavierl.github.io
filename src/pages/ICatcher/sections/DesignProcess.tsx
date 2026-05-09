import Typography from "@mui/material/Typography";
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PreviewableImg from "components/PreviewableImg";
import Tabs from "components/Tabs";
import SectionHeader from "components/SectionHeader";
import borders from "assets/theme/base/borders";

// Images
import dp1 from "assets/img/1.png";
import dp2 from "assets/img/2.png";
import dp3 from "assets/img/3.png";
import dp4 from "assets/img/4.png";
import pinterest from "assets/img/pinterest.png";
import sitemap from "assets/img/sitemap.png";
import persona1 from "assets/img/persona1.png";
import persona2 from "assets/img/persona2.png";
import sticker from "assets/img/stickers.png";
import first1 from "assets/img/first1.png";

const imgs = [dp1, dp2, dp3, dp4];

function DesignProcess() {
  const theme = useTheme();
  return (
    <Box component="section">
      <SectionHeader
        title="Design Process"
        bgColor={`linear-gradient(160deg, ${theme.showcaseColors.grey}, ${theme.palette.common.black})`}
      />
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
          Research
        </Typography>
        <Typography variant="body2">
          I interviewed four persons from different major to know better about how people gather
          inspirations and manage them in thier daily life to better understand these learning
          goals.
        </Typography>
        <Typography variant="body2" sx={{ color: "primary.main", alignSelf: "flex-start" }}>
          Learning Goal 1 To understand what habits people have when they are searching for
          inspirations online.
        </Typography>
        <Typography variant="body2" sx={{ color: "primary.main", alignSelf: "flex-start" }}>
          Learning Goal 2 To understand how people save thier inspirations in the daily life.
        </Typography>
        <Box sx={{ width: "100%", display: "flex" }}>
          {imgs.map((img, i) => (
            <Box
              component="img"
              src={img}
              key={`designUpdates-img-${i}`}
              alt="Brand Guidelines"
              sx={{
                minWidth: 0,
              }}
            />
          ))}
        </Box>
        <Typography
          variant="h3"
          sx={{
            mt: 10,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Competitors Analysis
        </Typography>
        <Grid container columnSpacing={8} rowSpacing={3}>
          <Grid
            container
            size={{ xs: 12, lg: 4 }}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={pinterest}
              alt="pinterest logo"
              sx={{ height: "80px", margin: "10px auto" }}
            />
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Pinterest
            </Typography>
          </Grid>
          <Grid container size={{ xs: 12, lg: 4 }} rowSpacing={3}>
            <Grid size={12}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "primary.main",
                }}
              >
                Adventages
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ mb: 3 }}>
                1. Pinterest have tags for classifing the pinstures and folders.
              </Typography>
              <Typography variant="body2">
                2. The layout of Pinterest is very clear to show more pictures.
              </Typography>
            </Grid>
          </Grid>
          <Grid container size={{ xs: 12, lg: 4 }} rowSpacing={3}>
            <Grid size={12}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "primary.main",
                }}
              >
                Disadventages
              </Typography>
            </Grid>
            <Grid size={12} sx={{ height: "100%" }}>
              <Typography variant="body2">
                Some app or website needs too many steps for saving pictures, like Pinterest. It's
                hard to manage and move pictures to diferrent folders.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          sx={{
            mt: 10,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Sitemap
        </Typography>
        <Typography variant="body2">
          Based on the reserch result I did before, I list down some ideas for the app design. I use
          Miro to create a mindmap board that helps me to think which functions I should add and
          what forms of inspiration I will make in my app design. It makes the navigation of my app
          design more clear.
        </Typography>
        <Box component="img" src={sitemap} alt="pinterest logo" width="100%" />
        <Typography variant="body2">
          From the sitemap, I made a list of main features that my app will have are as bellow:
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
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
              }}
            >
              Save inspirations of different forms
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
              }}
            >
              Community for sharing works and make friends
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
              }}
            >
              Manage folders of other apps
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">
              Create a new work of variable forms, like photo editing, add text and stickers,
              drawing, and picture collage, etc. Save them to the local folders.
            </Typography>{" "}
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">
              Post works for sharing to other people and get comments. View other people's works to
              get new ideas. Also follow the people you like and make friends.
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body2">
              By link to other app, you can manage all the folders easier through using only one
              app.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Personas
        </Typography>
        <Typography variant="body2">
          To understand better of how people will use my app, I create two personas that are from
          the target users of my app. Based on each background, I made user flows for each person
          and create my wireframes from that.
        </Typography>
        {/* <Box component="img" src={persona1} alt="persona" width="100%" sx={{ mt: 8, mb: 15 }} />
        <Box component="img" src={persona2} alt="persona" width="100%" /> */}
        <Tabs
          sx={{
            width: "100%",
            mt: 6,
          }}
          items={[persona1, persona2].map((img, i) => (
            <Card
              key={`persona-img-${i}`}
              sx={{
                border: "1px solid var(--mui-palette-divider)",
                borderTop: "none",
                p: 3,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: borders.borderRadius.xl,
                borderBottomRightRadius: borders.borderRadius.xl,
              }}
            >
              <CardMedia component="img" image={img} alt="persona image" />
            </Card>
          ))}
          buttons={["Zoe", "Matt"]}
        />
        <Typography
          variant="h3"
          sx={{
            mt: 10,
            py: 3,
            fontWeight: "bold",
          }}
        >
          Brainstorming & Concept Sketching
        </Typography>
        <Typography variant="body2">
          As I start brainstorming, I define the vision, mision and goals of my app idea. I choose
          one goal and write down the features that will fit for this goal. Then I draw some
          sketches of wireframe.
        </Typography>
        <Box component="img" src={sticker} alt="Concept" width="100%" sx={{ mt: 8, mb: 15 }} />
        <Typography
          variant="h3"
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          First Version of Design
        </Typography>
        <Typography variant="body2">
          Based on the research and preparation before, I created the frame works. And here are the
          first version of my design show as below. later I will use these for user test. Then
          modify and polish it to the better version.
        </Typography>
        <PreviewableImg src={first1} alt="Concept" width="100%" sx={{ mt: 8, mb: 15 }} />
      </Container>
    </Box>
  );
}

export default DesignProcess;

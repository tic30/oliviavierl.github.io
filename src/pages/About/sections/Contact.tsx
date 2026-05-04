// @mui material components
import { Container } from "ui/system";
import { Grid } from "ui/system";
import { LinkedIn as LinkedInIcon } from "ui/icons";
import { LocationOn as LocationOnIcon } from "ui/icons";

// Material Kit 2 React components
import { Box } from "ui/system";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import { Typography } from "ui/system";

import bgImage from "assets/img/me.jpeg";
import { linkedinUrl } from "../../../constants";

const hobbies = [
  {
    icon: "🎬",
    title: "Sci-Fiction Movies",
    content:
      "I love watch movies. I'm so enjoy every kind of different stories bring me some escape time from daily life.",
  },
  {
    icon: "🍲",
    title: "Cooking",
    content:
      " Favorite food is Chinese food, especially spicy!! Not only love eat delicious food, but also willing to learn how to cook them. Cooking make me feel so relax.",
  },
  {
    icon: "🏋",
    title: "Gym work",
    content: "Go to gym every morning. Happy to find some company to join workout together.",
  },
];

function Contact() {
  return (
    <Box component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <Box
            width="100%"
            sx={{
              bgcolor: "common.white",
              borderRadius: 4,
              boxShadow: 3,
              overflow: "hidden",
            }}
            mb={6}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: `linear-gradient(160deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <Typography variant="body1" sx={{ color: "common.white", opacity: 0.8, mb: 3 }}>
                      Reach out if you would like to chat about work opportunities
                    </Typography>
                    <Box display="flex" color="white" p={1}>
                      <LinkedInIcon />
                      <Typography
                        component="a"
                        variant="button"
                        sx={{ color: "common.white", opacity: 0.8, ml: 2, fontWeight: 400 }}
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {linkedinUrl}
                      </Typography>
                    </Box>
                    <Box display="flex" color="white" p={1}>
                      <LocationOnIcon />
                      <Typography
                        component="span"
                        variant="button"
                        sx={{ color: "common.white", opacity: 0.8, ml: 2, fontWeight: 400 }}
                      >
                        San Francisco, CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Box component="form" p={2} method="post" py={{ xs: 2, sm: 6 }}>
                  <Box px={3}>
                    <Typography variant="h2">Say Hi!</Typography>
                    <Typography variant="body2" sx={{ color: "text.primary", mb: 6 }}>
                      Chat with me about...
                    </Typography>
                  </Box>
                  {/* <Box pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <TextField
                          name="author"
                          variant="standard"
                          label="My name is"
                          placeholder=""
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <TextField
                          name="title"
                          variant="standard"
                          label="I'd like to talk about"
                          placeholder="A job opportunity..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <TextField
                          name="content"
                          variant="standard"
                          label="Tell me more"
                          placeholder="About yourself, your company or what you'd like to know about me..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <Button
                        variant="gradient"
                        component="a"
                        color="info"
                        href={`mailto:${email}subject=${title}&body=Hi Yifan,%0AThis is ${author}. ${content}`}
                      >
                        Send Email
                      </Button>
                    </Grid>
                  </Box> */}
                  {hobbies.map((hobby) => (
                    <Box key={hobby.title} px={3} sx={{ display: "flex", mb: 4 }}>
                      <Typography variant="h5" sx={{ mr: 2 }}>
                        {hobby.icon}
                      </Typography>
                      <Box>
                        <Typography variant="h5">{hobby.title}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 300 }}>
                          {hobby.content}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;

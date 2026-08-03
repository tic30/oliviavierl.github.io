import Typography from "@mui/material/Typography";
import { Box, Container, Grid, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "motion/react";

import bgImage from "assets/img/me.jpeg";
import { linkedinId, linkedinUrl } from "../../../constants";
import { useSnackbar } from "components/SnackbarProvider";

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
  const { showSnackbar } = useSnackbar();

  const handleCopyLinkedIn = () => {
    navigator.clipboard
      .writeText(linkedinUrl)
      .then(() => showSnackbar("LinkedIn URL copied to clipboard"));
  };

  return (
    <Box component="section" sx={{ py: { xs: 0, lg: 6 } }}>
      <Container>
        <Grid container>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.default",
              borderRadius: "borderRadius.xl",
              boxShadow: 3,
              overflow: "hidden",
              mb: 6,
            }}
          >
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, lg: 5 }}
                sx={{
                  position: "relative",
                  px: 0,
                  backgroundImage: `linear-gradient(160deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box sx={{ py: 6, pr: 6, pl: { xs: 6, sm: 12 }, my: "auto" }}>
                    <Typography
                      variant="body1"
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      sx={{ color: "common.white", opacity: 0.8, mb: 3 }}
                    >
                      Reach out if you would like to chat about work opportunities
                    </Typography>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        p: 1,
                        "&:hover .linkedin-link, &:focus-within .linkedin-link": {
                          opacity: 1,
                          textDecoration: "underline",
                        },
                        "&:hover .linkedin-copy, &:focus-within .linkedin-copy": {
                          opacity: 1,
                        },
                      }}
                    >
                      <LinkedInIcon />
                      <Typography
                        className="linkedin-link"
                        component="a"
                        variant="button"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          textTransform: "none",
                          textDecoration: "none",
                          color: "inherit",
                          opacity: 0.8,
                          ml: 2,
                          fontWeight: 400,
                        }}
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {linkedinId}
                        <OpenInNewIcon fontSize="inherit" />
                      </Typography>
                      <Tooltip title="Copy LinkedIn URL">
                        <IconButton
                          className="linkedin-copy"
                          onClick={handleCopyLinkedIn}
                          aria-label="Copy LinkedIn URL"
                          size="small"
                          sx={{
                            ml: "auto",
                            color: "inherit",
                            opacity: 0,
                            transition: "opacity 150ms ease",
                            "&:focus-visible": { opacity: 1 },
                          }}
                        >
                          <ContentCopyIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                      sx={{ display: "flex", color: "white", p: 1 }}
                    >
                      <LocationOnIcon />
                      <Typography
                        component="span"
                        variant="button"
                        sx={{
                          textTransform: "capitalize",
                          opacity: 0.8,
                          ml: 2,
                          fontWeight: 400,
                        }}
                      >
                        San Francisco, CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, lg: 7 }}>
                <Box component="form" method="post" sx={{ p: 2, py: { xs: 2, sm: 6 } }}>
                  <Box sx={{ px: 3 }}>
                    <Typography variant="h2">Say Hi!</Typography>
                    <Typography variant="body2" sx={{ color: "text.primary", mb: 6 }}>
                      Chat with me about...
                    </Typography>
                  </Box>
                  {hobbies.map((hobby, index) => (
                    <Box
                      key={hobby.title}
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2, ease: "easeOut" }}
                      sx={{ px: 3, display: "flex", mb: 4 }}
                    >
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

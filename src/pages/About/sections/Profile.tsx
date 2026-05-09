import { useState } from "react";
import Typography from "@mui/material/Typography";

// @mui material components
import { Container, Tooltip, Button, Zoom, Link } from "ui/system";
import { Email as EmailIcon } from "ui/icons";
import { LinkedIn as LinkedInIcon } from "ui/icons";
import { Instagram as InstagramIcon } from "ui/icons";
import { HistoryEdu as HistoryEduIcon } from "ui/icons";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Avatar } from "ui/system";
// import Button from "@mui/material/Button";

// Images
import profilePicture from "assets/img/avatar.png";
import { linkedinUrl, email, instagramUrl, resumeUrl } from "../../../constants";

function Profile() {
  const [open, openSnackbar] = useState(false);

  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Box sx={{ mt: -8, mb: 5 }}>
        <Avatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
      </Box>
      <Typography variant="h3">Yifan Li</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 5 }}>
        <Tooltip title="Resume" TransitionComponent={Zoom}>
          <Link target="_blank" href={resumeUrl} mr={3} sx={{ display: "flex" }}>
            <HistoryEduIcon color="primary" />
          </Link>
        </Tooltip>
        <Link target="_blank" href={linkedinUrl} mr={3} sx={{ display: "flex" }}>
          <LinkedInIcon />
        </Link>
        <Tooltip
          TransitionComponent={Zoom}
          open={open}
          onClose={() => openSnackbar(false)}
          title="Email copied to clipboard"
        >
          <Button
            variant="text"
            sx={{
              mr: 3,
              p: 0,
              minWidth: 0,
              minHeight: 0,
              color: "dark.main",
              "&:hover, &:active, &:focus": {
                color: "dark.main",
              },
            }}
            onClick={() => {
              navigator.clipboard.writeText(email).then(
                () => {
                  openSnackbar(true);
                },
                () => {
                  window.location.href = `mailto:${email}`;
                }
              );
            }}
          >
            <EmailIcon sx={{ width: "20px", height: "20px" }} />
          </Button>
        </Tooltip>
        <Link target="_blank" href={instagramUrl} sx={{ display: "flex" }}>
          <InstagramIcon />
        </Link>
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 300, mx: { xs: 0, lg: 6 } }}>
        I'm a ux /ui designer who loves clean, simple & unique design. I also enjoy crafting brand
        identities, icons, & ilustration work. I'm good at communicating with people, glad to work
        as a team and collaborate with other teammates. I'm willing to learn new things and grow
        with the team.
      </Typography>
    </Container>
  );
}

export default Profile;

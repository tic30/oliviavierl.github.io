import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Container, Link, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSnackbar } from "components/SnackbarProvider";

const iconColor: SxProps = {
  color: "text.secondary",
  "&:hover, &:active, &:focus": {
    color: "text.primary",
  },
  width: "24px",
  height: "24px",
};

// Images
import profilePicture from "assets/img/avatar.png";
import { linkedinUrl, email, instagramUrl, resumeUrl } from "../../../constants";
import type { SxProps } from "@mui/material/styles";

function Profile() {
  const { showSnackbar } = useSnackbar();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(
      () => showSnackbar("Email copied to clipboard"),
      () => {
        window.location.href = `mailto:${email}`;
      }
    );
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Box sx={{ mt: -8, mb: 5 }}>
        <Avatar src={profilePicture} alt="Avatar" sx={{ width: 120, height: 120 }} />
      </Box>
      <Typography variant="h3">Yifan Li</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 5 }}>
        <Tooltip title="Resume">
          <Link target="_blank" href={resumeUrl} sx={{ display: "flex", mr: 3 }}>
            <HistoryEduIcon />
          </Link>
        </Tooltip>
        <Link target="_blank" href={linkedinUrl} sx={{ display: "flex", mr: 3 }}>
          <LinkedInIcon sx={iconColor} />
        </Link>
        <Tooltip title="Copy email to clipboard">
          <Button
            variant="text"
            aria-label="Copy email to clipboard"
            sx={{
              mr: 3,
              p: 0,
              minWidth: 0,
              minHeight: 0,
            }}
            onClick={handleCopyEmail}
          >
            <EmailIcon sx={iconColor} />
          </Button>
        </Tooltip>
        <Link target="_blank" href={instagramUrl} sx={{ display: "flex" }}>
          <InstagramIcon sx={iconColor} />
        </Link>
      </Box>
      <Typography sx={{ fontSize: "1.25rem", fontWeight: 300, mx: { xs: 0, lg: 5 } }}>
        I'm a ux /ui designer who loves clean, simple & unique design. I also enjoy crafting brand
        identities, icons, & ilustration work. I'm good at communicating with people, glad to work
        as a team and collaborate with other teammates. I'm willing to learn new things and grow
        with the team.
      </Typography>
    </Container>
  );
}

export default Profile;

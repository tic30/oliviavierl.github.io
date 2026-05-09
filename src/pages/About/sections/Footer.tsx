import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Link, Stack } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Container>
        <Grid container>
          <Grid
            size={{ xs: 12, lg: 4 }}
            sx={{ textAlign: { xs: "center", lg: "left" }, mr: "auto", mb: { xs: 3, lg: 0 } }}
          >
            <Typography variant="h6" sx={{ textTransform: "uppercase", mb: { xs: 2, lg: 3 } }}>
              Material Design
            </Typography>
            <Stack
              component="ul"
              direction="row"
              spacing={3}
              sx={{
                flexWrap: "wrap",
                justifyContent: { xs: "center", lg: "flex-start" },
                pl: 0,
                mb: 3,
                listStyle: "none",
              }}
            >
              <Box component="li">
                <Typography
                  variant="button"
                  component={Link}
                  sx={{ fontWeight: 400, opacity: 0.8 }}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  variant="button"
                  component={Link}
                  sx={{ fontWeight: 400, opacity: 0.8 }}
                  href="https://www.creative-tim.com/presentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  variant="button"
                  component={Link}
                  sx={{ fontWeight: 400, opacity: 0.8 }}
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  variant="button"
                  component={Link}
                  sx={{ fontWeight: 400, opacity: 0.8 }}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Services
                </Typography>
              </Box>
            </Stack>
            <Typography variant="button" sx={{ opacity: 0.8 }}>
              Copyright © <script>document.write(new Date().getFullYear())</script>2021 Material
              Design by Creative Tim.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{ ml: "auto", textAlign: { xs: "center", lg: "right" } }}
          >
            <Typography variant="body1" sx={{ fontWeight: 700, mb: 6, fontSize: "1.125rem" }}>
              The reward for getting on the stage is fame. The price of fame is you can't get off
              the stage.
            </Typography>
            <Typography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              sx={{ color: "dark.main", opacity: 0.5, mr: 3 }}
            >
              <i className="fab fa-dribbble" />
            </Typography>
            <Typography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              sx={{ color: "dark.main", opacity: 0.5, mr: 3 }}
            >
              <i className="fab fa-twitter" />
            </Typography>
            <Typography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              sx={{ color: "dark.main", opacity: 0.5, mr: 3 }}
            >
              <i className="fab fa-pinterest" />
            </Typography>
            <Typography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              sx={{ color: "dark.main", opacity: 0.5 }}
            >
              <i className="fab fa-github" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

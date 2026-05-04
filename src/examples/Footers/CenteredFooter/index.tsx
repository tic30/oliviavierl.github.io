/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Link } from "ui/system";
import { Grid } from "ui/system";
import { Stack } from "ui/system";

// @mui icons
import { Facebook as FacebookIcon } from "ui/icons";
import { Twitter as TwitterIcon } from "ui/icons";
import { Instagram as InstagramIcon } from "ui/icons";
import { Pinterest as PinterestIcon } from "ui/icons";
import { GitHub as GitHubIcon } from "ui/icons";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";
import type { CompanyInfo, FooterSocial } from "types/site";

interface CenteredFooterProps {
  company?: CompanyInfo;
  links?: CompanyInfo[];
  socials?: FooterSocial[];
  light?: boolean;
}

const defaultCompany: CompanyInfo = { href: "https://www.creative-tim.com/", name: "Creative Tim" };
const defaultLinks: CompanyInfo[] = [
  { href: "https://www.creative-tim.com/", name: "Company" },
  { href: "https://www.creative-tim.com/presentation", name: "About Us" },
  { href: "https://www.creative-tim.com/presentation", name: "Team" },
  { href: "https://www.creative-tim.com/templates/react", name: "Products" },
  { href: "https://www.creative-tim.com/blog", name: "Blog" },
  { href: "https://www.creative-tim.com/license", name: "License" },
];
const defaultSocials: FooterSocial[] = [
  { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/CreativeTim/" },
  { icon: <TwitterIcon fontSize="small" />, link: "https://twitter.com/creativetim" },
  {
    icon: <InstagramIcon fontSize="small" />,
    link: "https://www.instagram.com/creativetimofficial/",
  },
  { icon: <PinterestIcon fontSize="small" />, link: "https://ro.pinterest.com/thecreativetim/" },
  { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/creativetimofficial" },
];

function CenteredFooter({
  company = defaultCompany,
  links = defaultLinks,
  socials = defaultSocials,
  light = false,
}: CenteredFooterProps) {
  const { href, name } = company;

  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <Typography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {link.name}
    </Typography>
  ));

  const renderSocials = socials.map((social) => (
    <Typography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </Typography>
  ));

  return (
    <Box component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <Typography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} Material by{" "}
            <Typography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </Typography>
            .
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CenteredFooter;

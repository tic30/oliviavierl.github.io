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
import { Container } from "ui/system";
import { Link } from "ui/system";
import { Icon } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import type { CompanyInfo } from "types/site";

interface SimpleFooterProps {
  company?: CompanyInfo;
  links?: CompanyInfo[];
  light?: boolean;
}

const defaultCompany: CompanyInfo = { href: "https://www.creative-tim.com/", name: "Creative Tim" };
const defaultLinks: CompanyInfo[] = [
  { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  { href: "https://www.creative-tim.com/presentation", name: "About Us" },
  { href: "https://www.creative-tim.com/blog", name: "Blog" },
  { href: "https://www.creative-tim.com/license", name: "License" },
];

function SimpleFooter({
  company = defaultCompany,
  links = defaultLinks,
  light = false,
}: SimpleFooterProps) {
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link, key) => (
      <Box
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href} target="_blank">
          <Typography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
            {link.name}
          </Typography>
        </Link>
      </Box>
    ));

  return (
    <Container>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, made with
          <Box fontSize={size.md} color={light ? "white" : "text"} mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </Box>
          by
          <Link href={href} target="_blank">
            <Typography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
              &nbsp;{name}&nbsp;
            </Typography>
          </Link>
          for a better web.
        </Box>
        <Box
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </Box>
      </Box>
    </Container>
  );
}

export default SimpleFooter;

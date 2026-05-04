// @mui material components
import { Container } from "ui/system";
import { Link } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import type { FooterContent, FooterLinkItem } from "types/site";

interface SimpleFooterProps {
  links?: FooterLinkItem[];
  light?: boolean;
  content?: Partial<FooterContent>;
}

function SimpleFooter({ links = [], light = false, content }: SimpleFooterProps) {
  const { size } = typography;
  const resolvedLinks = links.length
    ? links
    : (content?.menus?.flatMap((menu) => menu.items ?? []) ?? []);

  const renderLinks = () =>
    resolvedLinks.map((link, key) => (
      <Box
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === resolvedLinks.length - 1 ? 0 : 2}
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
    <Container sx={{ my: 1, py: 0 }}>
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
          &copy; {new Date().getFullYear()}, design and coded by Yifan Li
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

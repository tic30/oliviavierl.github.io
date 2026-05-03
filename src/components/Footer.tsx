// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

function SimpleFooter({ links, light }) {
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

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  links: [],
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default SimpleFooter;

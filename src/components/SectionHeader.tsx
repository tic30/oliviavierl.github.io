// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Container } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

function SectionHeader({ title, bgColor = colors.primary.main, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        background: bgColor,
        py: 10,
        ...sx,
      }}
      {...props}
    >
      <Container>
        <Typography variant="h2" color="white">
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
};

export default SectionHeader;

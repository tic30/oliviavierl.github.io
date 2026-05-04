// @mui material components
import PropTypes from "prop-types";
import { Box } from "ui/system";
import { Typography } from "ui/system";
import Parallax from "components/Parallax";

// Author page sections
import bgImage from "assets/img/cover1.jpg";
import colors from "assets/theme/base/colors";
import Intro from "./sections/Intro";
import Research from "./sections/Research";
import Personas from "./sections/Personas";
import DesignUpdates from "./sections/DesignUpdates";
import FinalWireframes from "./sections/FinalWireframes";

const HighlightedText = ({ children }) => (
  <span
    style={{
      color: colors.showcaseColors.yellow,
      borderColor: colors.showcaseColors.yellow,
    }}
  >
    {children}
  </span>
);

HighlightedText.propTypes = {
  children: PropTypes.node.isRequired,
};

function MeetupRedesign() {
  return (
    <Parallax
      bgImage={bgImage}
      sx={{
        backgroundColor: colors.white.main,
      }}
      bgImageSx={{
        top: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          textAlign: "center",
          pt: { xs: "15vh", lg: "30vh" },
          pb: { xs: "5vh", lg: "20vh" },
          backgroundColor: colors.white.main,
        }}
      >
        <Typography variant="h1">
          <HighlightedText>Meetup</HighlightedText> App Redesign
        </Typography>
        <Typography variant="h5" mt={1}>
          A Better Way for Making Friends and Joining Gourps
        </Typography>
      </Box>
      <Box
        sx={{
          height: "250vh",
        }}
      />
      <Box
        sx={{
          backgroundColor: colors.white.main,
        }}
      >
        <Intro />
        <Research />
        <Personas />
        <DesignUpdates />
        <FinalWireframes />
      </Box>
    </Parallax>
  );
}

export default MeetupRedesign;

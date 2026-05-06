import type { ReactNode } from "react";
import { Box, useTheme } from "ui/system";
import { Typography } from "ui/system";
import Parallax from "components/Parallax";

// Author page sections
import bgImage from "assets/img/cover1.jpg";
import Intro from "./sections/Intro";
import Research from "./sections/Research";
import Personas from "./sections/Personas";
import DesignUpdates from "./sections/DesignUpdates";
import FinalWireframes from "./sections/FinalWireframes";

interface HighlightedTextProps {
  children: ReactNode;
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  const theme = useTheme();
  return (
    <span
      style={{
        color: theme.palette.showcase.yellow,
        borderColor: theme.palette.showcase.yellow,
      }}
    >
      {children}
    </span>
  );
};

function MeetupRedesign() {
  return (
    <Parallax
      bgImage={bgImage}
      sx={{
        backgroundColor: "common.white",
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
          backgroundColor: "common.white",
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
          backgroundColor: "common.white",
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

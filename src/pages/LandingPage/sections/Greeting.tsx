import type { ReactNode } from "react";
import { keyframes } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// @mui material components
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "ui/icons";
import wave from "assets/img/wave.svg";

interface HighlightedTextProps {
  children: ReactNode;
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  const theme = useTheme();
  return (
    <span
      style={{
        color: theme.palette.primary.main,
        borderBottom: "2px solid",
        borderColor: theme.palette.primary.main,
      }}
    >
      {children}
    </span>
  );
};

const bounce = keyframes`
    0% {transform: translateY(0)}
    20% {transform: translateY(10px)}
    100% {transform: translateY(0)}
`;

function Greeting() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "calc(100vh - 100px)",
        mb: "100px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", px: 1 }}>
        <Box component="img" src={wave} alt="" sx={{ width: "120px", ml: "-40px" }} />
        <Typography
          variant="h1"
          // sx={({ breakpoints, typography: { size } }) => ({
          //   [breakpoints.down("md")]: {
          //     fontSize: size["3xl"],
          //   },
          // })}
        >
          I'm <span style={{ color: theme.palette.primary.main }}>Yifan!</span>
        </Typography>
        <Typography variant="h4" sx={{ mt: "12px", lineHeight: "40px", maxWidth: "980px" }}>
          I'm a passionate <HighlightedText>product designer</HighlightedText> from San Francisco,
          who creates <HighlightedText>impactful</HighlightedText> experiences to bring people{" "}
          <HighlightedText>delight</HighlightedText>!
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          width: "20px",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          animation: `${bounce} 1s linear infinite`,
        }}
      >
        <KeyboardArrowDownIcon sx={{ opacity: 0.5 }} />
        <KeyboardArrowDownIcon sx={{ mt: "-10px" }} />
      </Box>
    </Container>
  );
}

export default Greeting;

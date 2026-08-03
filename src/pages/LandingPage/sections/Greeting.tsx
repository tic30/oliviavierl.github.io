import { useEffect, useState, type ReactNode } from "react";
import { keyframes } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";
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

type Segment = { text: string; highlighted: boolean };

const INTRO_SEGMENTS: Segment[] = [
  { text: "I'm a passionate ", highlighted: false },
  { text: "product designer", highlighted: true },
  { text: " from San Francisco, who creates ", highlighted: false },
  { text: "impactful", highlighted: true },
  { text: " experiences to bring people ", highlighted: false },
  { text: "delight", highlighted: true },
  { text: "!", highlighted: false },
];

const TOTAL_CHARS = INTRO_SEGMENTS.reduce((n, s) => n + s.text.length, 0);
const TYPING_SPEED_MS = 10;
const TYPING_START_DELAY_MS = 400;

function renderTyped(segments: Segment[], count: number): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = count;
  segments.forEach((segment, i) => {
    if (remaining <= 0) return;
    const visible = segment.text.slice(0, remaining);
    remaining -= segment.text.length;
    if (segment.highlighted) {
      nodes.push(<HighlightedText key={i}>{visible}</HighlightedText>);
    } else {
      nodes.push(<span key={i}>{visible}</span>);
    }
  });
  return nodes;
}

const caretBlink = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`;

const bounce = keyframes`
    0% {transform: translateY(0)}
    20% {transform: translateY(10px)}
    100% {transform: translateY(0)}
`;

function Greeting() {
  const theme = useTheme();
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= TOTAL_CHARS) return;
    const delay = typedCount === 0 ? TYPING_START_DELAY_MS : TYPING_SPEED_MS;
    const timer = window.setTimeout(() => setTypedCount((c) => c + 1), delay);
    return () => window.clearTimeout(timer);
  }, [typedCount]);

  const isDone = typedCount >= TOTAL_CHARS;

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
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          I'm <span style={{ color: theme.palette.primary.main }}>Yifan!</span>
        </Typography>
        <Typography variant="h4" sx={{ mt: "12px", lineHeight: "40px", maxWidth: "980px" }}>
          {renderTyped(INTRO_SEGMENTS, typedCount)}
          {!isDone && (
            <Box
              component="span"
              aria-hidden
              sx={{
                display: "inline-block",
                width: "3px",
                height: "1em",
                ml: "2px",
                verticalAlign: "text-bottom",
                backgroundColor: theme.palette.text.primary,
                animation: `${caretBlink} 1s step-end infinite`,
              }}
            />
          )}
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

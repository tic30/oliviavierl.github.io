import { Link } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";
import { Box, Card, Link as MuiLink, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

import getShowcases from "showcases.routes";
import type { ShowcaseItem } from "types/site";
import { fadeSlideUp } from "components/motionPresets";

const MotionRouterLink = motion.create(Link);
const MotionMuiLink = motion.create(MuiLink);

interface ShowCaseCardContentProps {
  item: ShowcaseItem;
}

interface ShowCaseCardProps {
  item: ShowcaseItem;
  [key: string]: unknown;
}

function ShowCaseCardContent({ item }: ShowCaseCardContentProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <Card
      component={item.route ? MotionRouterLink : MotionMuiLink}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      {...fadeSlideUp()}
      to={item.route ? item.route : ""}
      href={item.href ? item.href : ""}
      target={item.href ? "_blank" : ""}
      rel="noreferrer"
      sx={{
        textDecoration: "none",
        textTransform: "none",
        display: "block",
        overflow: "hidden",
        color: isDarkMode ? "text.primary" : "background.default",
        borderRadius: "borderRadius.xl",
        backgroundColor: item.bgColor,
        boxShadow: ({ boxShadows: { colored } }) => colored.dark,
      }}
    >
      <Box component="img" src={item.bgImg} alt="" sx={{ width: "100%" }} />
      <Box
        sx={{
          my: { xs: 2, lg: 10 },
          mx: { xs: 2, lg: 10 },
        }}
      >
        <Typography variant="h2" sx={{ lineHeight: 1 }}>
          {item.name}
        </Typography>
        <Typography sx={{ display: "block", mb: 2, fontSize: "0.875rem" }}>
          {item.description}
        </Typography>
        <Typography sx={{ fontWeight: "600", fontSize: "0.875rem" }}>{item.longDesc}</Typography>
      </Box>
    </Card>
  );
}

function ShowCaseCard({ item, ...props }: ShowCaseCardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1320,
        mx: "auto",
        px: { xs: 2, sm: 3 },
        mb: [10, 30],
      }}
      {...props}
    >
      <ShowCaseCardContent item={item} />
    </Box>
  );
}

function ShowCases() {
  const theme = useTheme();
  const showCasesRoutes = getShowcases(theme);
  return (
    <Box sx={{ pb: 4 }}>
      {showCasesRoutes.map((item) => (
        <ShowCaseCard item={item} key={item.name} />
      ))}
    </Box>
  );
}

export default ShowCases;

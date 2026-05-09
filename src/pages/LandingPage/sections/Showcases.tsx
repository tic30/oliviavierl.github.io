import { Link } from "react-router-dom";
import { useIntersectionObserver } from "usehooks-ts";
import { Card, Box, Link as MuiLink, Fade, useTheme } from "ui/system";
import getShowcases from "showcases.routes";
import type { ShowcaseItem } from "types/site";
import { Typography } from "@mui/material";

interface ShowCaseCardContentProps {
  item: ShowcaseItem;
  isIntersecting: boolean;
}

interface ShowCaseCardProps {
  item: ShowcaseItem;
  [key: string]: unknown;
}

function ShowCaseCardContent({ item, isIntersecting }: ShowCaseCardContentProps) {
  return (
    <Fade in={isIntersecting} timeout={1000}>
      <Card
        sx={{
          textDecoration: "none",
          textTransform: "none",
          display: "block",
          overflow: "hidden",
          color: "background.default",
          backgroundColor: item.bgColor,
          boxShadow: ({ boxShadows: { colored } }) => colored.dark,
        }}
        component={item.route ? Link : MuiLink}
        to={item.route ? item.route : ""}
        href={item.href ? item.href : ""}
        target={item.href ? "_blank" : ""}
        rel={item.href ? "noreferrer" : "noreferrer"}
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
    </Fade>
  );
}

function ShowCaseCard({ item, ...props }: ShowCaseCardProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1320,
        mx: "auto",
        px: { xs: 2, sm: 3 },
        mb: [10, 30],
      }}
      ref={ref}
      {...props}
    >
      <ShowCaseCardContent item={item} isIntersecting={isIntersecting} />
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

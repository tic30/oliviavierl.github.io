import { Link } from "react-router-dom";
import { useIntersectionObserver } from "usehooks-ts";
import { Box, Card, Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useDarkModeCheck from "hooks/useDarkModeCheck";
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
  const isDarkMode = useDarkModeCheck();

  return (
    <Card
      sx={{
        textDecoration: "none",
        textTransform: "none",
        display: "block",
        overflow: "hidden",
        color: isDarkMode ? "text.primary" : "background.default",
        borderRadius: "borderRadius.xl",
        backgroundColor: item.bgColor,
        boxShadow: ({ boxShadows: { colored } }) => colored.dark,
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 800ms ease, transform 800ms ease",
        willChange: "opacity, transform",
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

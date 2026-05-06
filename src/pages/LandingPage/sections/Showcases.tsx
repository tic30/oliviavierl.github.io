import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Box, Link as MuiLink, Fade, useTheme } from "ui/system";
import { Typography } from "ui/system";
import getShowcases from "showcases.routes";
import containerSx from "assets/theme/components/container";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import type { ShowcaseItem } from "types/site";

interface ShowCaseCardContentProps {
  item: ShowcaseItem;
  target: Element | null;
}

interface ShowCaseCardProps {
  item: ShowcaseItem;
  [key: string]: unknown;
}

function ShowCaseCardContent({ item, target }: ShowCaseCardContentProps) {
  const isElementInViewport = useIntersectionObserver(target);

  return (
    <Fade in={isElementInViewport} timeout={1000}>
      <Card
        sx={{
          overflow: "hidden",
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
          <Typography display="block" variant="h2" color="white" sx={{ lineHeight: 1 }}>
            {item.name}
          </Typography>
          <Typography
            display="block"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{ mb: 2 }}
          >
            {item.description}
          </Typography>
          <Typography
            display="block"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{ fontWeight: "bold" }}
          >
            {item.longDesc}
          </Typography>
        </Box>
      </Card>
    </Fade>
  );
}

function ShowCaseCard({ item, ...props }: ShowCaseCardProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <Container sx={{ mb: [10, 30] }} ref={targetRef} {...props}>
      <ShowCaseCardContent item={item} target={target} />
    </Container>
  );
}

function ShowCases() {
  const theme = useTheme();
  const showCasesRoutes = getShowcases(theme);
  return (
    <Box sx={{ ...containerSx, pb: 4 }}>
      {showCasesRoutes.map((item) => (
        <ShowCaseCard item={item} key={item.name} />
      ))}
    </Box>
  );
}

export default ShowCases;

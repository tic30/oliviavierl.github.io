import { Box, Container, IconButton, Typography } from "@mui/material";
import SectionHeader from "components/SectionHeader";
import colors from "assets/theme/base/colors";
import f11 from "assets/img/f11.png";
import f12 from "assets/img/f12.png";
import f13 from "assets/img/f13.png";
import f14 from "assets/img/f14.png";
import f21 from "assets/img/f21.png";
import f22 from "assets/img/f22.png";
import f23 from "assets/img/f23.png";
import f24 from "assets/img/f24.png";
import f31 from "assets/img/f31.png";
import f32 from "assets/img/f32.png";
import f33 from "assets/img/f33.png";
import f34 from "assets/img/f34.png";
import figma from "assets/img/figma-icon.png";

const sections = [
  {
    title: "Feature 1 - Edit photo and post to share",
    prototypeUrl:
      "https://www.figma.com/proto/SUz1H9Z3hrmLYyosaN7Bca/Feature-one-prototype?node-id=1%3A186&scaling=min-zoom",
    imgs: [f11, f12, f13, f14],
  },
  {
    title: "Feature 2 - Edit photo and post to share",
    prototypeUrl:
      "https://www.figma.com/proto/1h3XX9JKORI1h4VpGiHDKm/Feature-two-prototype?node-id=2%3A938&scaling=min-zoom",
    imgs: [f21, f22, f23, f24],
  },
  {
    title: "Feature 3 - Follow other user I like",
    prototypeUrl:
      "https://www.figma.com/proto/t14CAFakapHwPtxxlHRko6/Feature-three-prototype?node-id=5%3A293&scaling=min-zoom",
    imgs: [f31, f32, f33, f34],
  },
];

function Finals() {
  return (
    <Box component="section">
      <SectionHeader
        title="Finalized Design"
        bgColor={`linear-gradient(160deg, ${colors.showcaseColors.grey}, ${colors.black.main})`}
        sx={{ mb: 6 }}
      />
      {sections.map((section, i) => (
        <Box key={`finals-title-${i}`} sx={{ py: 6 }}>
          <Container sx={{ pb: 3, display: "flex", alignItems: "center" }}>
            <Typography variant="body1">{section.title}</Typography>
          </Container>
          <Box sx={{ pl: ["calc(50% - 484px)"], width: "100%", overflowX: "auto" }}>
            <Box sx={{ display: "flex", pb: 3 }}>
              {section.imgs.map((img, j) => (
                <Box
                  component="img"
                  src={img}
                  key={`designUpdates-img-${i}-${j}`}
                  alt="Finalized Design"
                  sx={{
                    display: "inline-block",
                    maxHeight: "50vh",
                  }}
                />
              ))}
            </Box>
          </Box>
          <Container sx={{ pb: 3, display: "flex", alignItems: "center" }}>
            {section.prototypeUrl && (
              <IconButton
                component="a"
                target="_blank"
                href={section.prototypeUrl}
                sx={{ py: 0, pl: 0 }}
              >
                <Box
                  component="img"
                  src={figma}
                  alt="prototype link"
                  sx={{
                    width: "1.5rem",
                    mx: 1,
                  }}
                />
                <Typography variant="body2" color={colors.primary.main}>
                  Go to prototype
                </Typography>
              </IconButton>
            )}
          </Container>
        </Box>
      ))}
    </Box>
  );
}

export default Finals;

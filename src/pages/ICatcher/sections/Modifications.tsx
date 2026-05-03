import { Box, Container, Typography } from "@mui/material";
import SectionHeader from "components/SectionHeader";
import colors from "assets/theme/base/colors";
import change11 from "assets/img/change11.png";
import change12 from "assets/img/change12.png";
import change13 from "assets/img/change13.png";
import change21 from "assets/img/change21.png";
import change22 from "assets/img/change22.png";
import change23 from "assets/img/change23.png";

const sections = [
  {
    title: "Feature 1 - Edit photo and post to share",
    rows: [
      {
        text: "I change the way of picking a color. The color pallette will show as different color theme, like wram tone or blue color variations. It's easy to use even for those who does not have drawing background. And the pallette lists can be customized by users. They can pick their own group of colors to show.",
        img: change11,
      },
      {
        text: "When I click the plus button for add a new work, the menu will fly out. I change the plus button to a cross icon when the fly menus are out to show easier how to close the fly out menu.",
        img: change12,
      },
      {
        text: "I change the back icon to keep the consistency of my design. And I also change the upload icon as well.",
        img: change13,
      },
    ],
  },
  {
    title: "Feature 2 - Edit photo and post to share",
    rows: [
      {
        text: "I change the color to bright orange after linked one app. It's obviously seperate form the one that didn't linked yet.",
        img: change21,
      },
      {
        text: "I add one verifying step before link to an app for the copyright infringement issue. It need to be notice the original app before using.",
        img: change22,
      },
      {
        text: "I add a clear button for quickly clear the search bar. Saving more time when users type wrong.",
        img: change23,
      },
    ],
  },
];

function Modifications() {
  return (
    <Box component="section">
      <SectionHeader
        title="Modifications"
        bgColor={`linear-gradient(160deg, ${colors.showcaseColors.grey}, ${colors.black.main})`}
        sx={{ mb: 6 }}
      />
      {sections.map((section, i) => (
        <Box key={`finals-title-${i}`} sx={{ py: 6 }}>
          <Container sx={{ pb: 3 }}>
            <Typography variant="body1">{section.title}</Typography>
            {section.rows.map((row, j) => (
              <Box
                key={`designUpdates-img-${i}-${j}`}
                alt="Finalized Design"
                sx={{
                  display: "flex",
                  flexDirection: ["column", j % 2 ? "row-reverse" : "row"],
                  alignItems: "center",
                  mt: 6,
                  mx: [0, -2],
                }}
              >
                <Box
                  sx={{ width: ["100%", "60%"], flexShrink: 0, ...(j % 2 ? {} : { mr: [0, 4] }) }}
                >
                  <Box
                    component="img"
                    src={row.img}
                    alt="modification img"
                    aria-hidden
                    sx={{ width: "100%" }}
                  />
                </Box>
                <Box sx={j % 2 ? { mr: [0, 4] } : {}}>
                  <Typography variant="body2">{row.text}</Typography>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>
      ))}
    </Box>
  );
}

export default Modifications;

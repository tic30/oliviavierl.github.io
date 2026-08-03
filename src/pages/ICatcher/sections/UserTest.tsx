import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "motion/react";

// @mui material components
import { fadeSlideFromLeft, fadeSlideFromRight } from "components/motionPresets";
import SectionHeader from "components/SectionHeader";

// Images
import users from "assets/img/users.png";
import abtest from "assets/img/abtest.png";
import PreviewableImg from "components/PreviewableImg";

function UserTest() {
  const theme = useTheme();
  return (
    <Box component="section">
      <SectionHeader
        title="User Test"
        bgColor={`linear-gradient(160deg, ${theme.showcaseColors.grey}, ${theme.palette.common.black})`}
      />
      <Container
        sx={{
          "& > div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 12,
          },
        }}
      >
        <Box component={motion.div} {...fadeSlideFromLeft()}>
          <Typography
            variant="h3"
            sx={{
              py: 3,
              fontWeight: "bold",
            }}
          >
            Two Rounds of User Tests
          </Typography>
          <Typography variant="body2">
            I did two rounds of user test. I interviewed 6 people from students to work people. They
            are from different majors and occupations. I let them test the user flow to know better
            how the real users will use my app. Is it easy to use? Are there any confusing steps?
            And how they feel about my design. I got lots of feedback from them, which helps me a
            lot for the futher modifying.
          </Typography>
          <Box component="img" src={users} alt="Design Updates" width="100%" />
        </Box>
        <Box component={motion.div} {...fadeSlideFromRight()}>
          <Typography
            variant="h3"
            sx={{
              py: 3,
              fontWeight: "bold",
            }}
          >
            A/B Test
          </Typography>
          <Typography variant="body2">
            I also Design a A/B test version of feature two. To learn which design page layout
            converts into higher usage. The metric they are tracking would be how long time they
            finish the flow.
          </Typography>
          <PreviewableImg src={abtest} alt="A/B Test" width="100%" />
        </Box>
      </Container>
    </Box>
  );
}

export default UserTest;

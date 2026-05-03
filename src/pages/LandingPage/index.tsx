import { Box } from "@mui/material";
import colors from "assets/theme/base/colors";
import Greeting from "./sections/Greeting";
import Showcases from "./sections/Showcases";

function LandingPage() {
  return (
    <Box
      sx={{
        backgroundColor: colors.white.main,
      }}
    >
      <Greeting />
      <Showcases />
    </Box>
  );
}

export default LandingPage;

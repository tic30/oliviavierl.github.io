import { Box } from "ui/system";
import Greeting from "./sections/Greeting";
import Showcases from "./sections/Showcases";

function LandingPage() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Greeting />
      <Showcases />
    </Box>
  );
}

export default LandingPage;

// @mui material components
import { Container } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import SectionHeader from "components/SectionHeader";

// Images
import final11 from "assets/img/final11.png";
import final12 from "assets/img/final12.png";
import final13 from "assets/img/final13.png";
import final14 from "assets/img/final14.png";
import final15 from "assets/img/final15.png";

const imgSx = {
  mb: 3,
};

const imgs = [final11, final12, final13, final14, final15];

function FinalWireframes() {
  return (
    <Box component="section">
      <SectionHeader title="Final Wireframes" />
      <Container sx={{ py: 12 }}>
        <>
          {imgs.map((img, i) => (
            <Box
              component="img"
              src={img}
              key={`designUpdates-img-${i}`}
              alt="Design Updates"
              width="100%"
              sx={imgSx}
            />
          ))}
        </>
      </Container>
    </Box>
  );
}

export default FinalWireframes;

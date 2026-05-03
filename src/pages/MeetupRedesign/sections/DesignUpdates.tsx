// @mui material components
import { Container } from "base-ui";

// Material Kit 2 React components
import { Box } from "base-ui";
import SectionHeader from "components/SectionHeader";

// Images
import c11 from "assets/img/c11.png";
import c1 from "assets/img/c1.png";
import c2 from "assets/img/c2.png";
import c3 from "assets/img/c3.png";
import c4 from "assets/img/c4.png";
import c12 from "assets/img/c12.png";
import c13 from "assets/img/c13.png";
import c14 from "assets/img/c14.png";
import c15 from "assets/img/c15.png";
import c16 from "assets/img/c16.png";
import c17 from "assets/img/c17.png";
import c18 from "assets/img/c18.png";
import c19 from "assets/img/c19.png";

const imgSx = {
  mb: 3,
};

const imgs = [c11, c1, c2, c3, c4, c12, c13, c14, c15, c16, c17, c18, c19];

function DesignUpdates() {
  return (
    <Box component="section">
      <SectionHeader title="Design Updates" />
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

export default DesignUpdates;

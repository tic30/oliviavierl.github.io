// @mui material components
import { Container } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import type { StyleObject } from "types/site";

interface SectionHeaderProps {
  title: string;
  bgColor?: string;
  sx?: StyleObject;
  [key: string]: unknown;
}

function SectionHeader({
  title,
  bgColor = colors.primary.main,
  sx = {},
  ...props
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        background: bgColor,
        py: 10,
        ...sx,
      }}
      {...props}
    >
      <Container>
        <Typography variant="h2" color="white">
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

export default SectionHeader;

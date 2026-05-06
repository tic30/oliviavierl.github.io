// @mui material components
import { Container, useTheme } from "ui/system";

// Material Kit 2 React components
import { Box } from "ui/system";
import { Typography } from "ui/system";

import type { StyleObject } from "types/site";

interface SectionHeaderProps {
  title: string;
  bgColor?: string;
  sx?: StyleObject;
  [key: string]: unknown;
}

function SectionHeader({ title, bgColor, sx = {}, ...props }: SectionHeaderProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: bgColor ?? theme.palette.primary.main,
        py: 10,
        ...sx,
      }}
      {...props}
    >
      <Container>
        <Typography variant="h2" color="common.white">
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

export default SectionHeader;

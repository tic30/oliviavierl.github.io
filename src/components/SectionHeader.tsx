import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// @mui material components
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
        <Typography variant="h2" sx={{ color: "common.white" }}>
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

export default SectionHeader;

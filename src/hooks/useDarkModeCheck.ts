import useMediaQuery from "@mui/material/useMediaQuery";

export default function useDarkModeCheck() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
import * as React from "react";
import { Box, Dialog, DialogTitle, IconButton } from "ui/system";
import { Close as CloseIcon } from "ui/icons";
import colors from "assets/theme/base/colors";

interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

interface PreviewableImgProps {
  src: string;
  alt: string;
  [key: string]: unknown;
}

function SimpleDialog({ open, onClose, src, alt }: SimpleDialogProps) {
  return (
    <Dialog
      fullScreen
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { backgroundColor: "transparent !important" } }}
    >
      <DialogTitle sx={{ height: "50px" }}>
        {" "}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: colors.white.main,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
        }}
      />
    </Dialog>
  );
}

export default function PreviewableImg({ src, alt, ...props }: PreviewableImgProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box {...props}>
      <Box
        component="img"
        src={src}
        alt={alt}
        onClick={handleClickOpen}
        sx={{
          width: "100%",
          ":hover": {
            cursor: "pointer",
          },
        }}
      />
      <SimpleDialog open={open} onClose={handleClose} src={src} alt={alt} />
    </Box>
  );
}

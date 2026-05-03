import * as React from "react";
import PropTypes from "prop-types";
import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "assets/theme/base/colors";

function SimpleDialog({ open, onClose, src, alt }) {
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

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default function PreviewableImg({ src, alt, ...props }) {
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

PreviewableImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function DialogClose({ open, onClose, onConfirm }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#222",
          padding: "20px",
          color: "#fff",
          width: "400px",
        },
      }}
    >
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: "18px", textAlign: "center" }}
        >
          Do you want to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", gap: "10px" }}>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "#444",
            color: "#fff",
            borderRadius: "8px",
            padding: "8px 16px",
            "&:hover": { backgroundColor: "#555" },
          }}
        >
          Disagree
        </Button>
        <Button
          onClick={onConfirm}
          autoFocus
          sx={{
            backgroundColor: "#E7539F",
            color: "#fff",
            borderRadius: "8px",
            padding: "8px 16px",
            "&:hover": { backgroundColor: "#d6428e" },
          }}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

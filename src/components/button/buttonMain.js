import { Button } from "@mui/material";
import React from "react";

export default function ButtonMain({ text, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: (theme) => theme.palette.ButtonColor.main,
        padding: "10px 30px",
        color: (theme) => theme.palette.text.primary,
        textTransform: "uppercase",
        borderRadius: "20px",
        "&:hover": {
          backgroundColor: "#FFA733",
          color: "#FFF5E1",
          boxShadow: "0px 4px 15px rgba(255, 128, 0, 0.5)",
        },
      }}
    >
      {text}
    </Button>
  );
}

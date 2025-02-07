import { Button } from "@mui/material";
import React from "react";

export default function ButtonMain({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: (theme) => theme.palette.ButtonColor.main,
        padding: "10px 30px",
        color: (theme) => theme.palette.text.primary,
        textTransform: "uppercase",
      }}
    >
      {text}
    </Button>
  );
}

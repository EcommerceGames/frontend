import { Button } from "@mui/material";
import React from "react";

export default function ButtonSlide({ text }) {
  return (
    <Button
      sx={{
        width: "140px",
        height: "48px",
        cursor: "pointer",
        backgroundColor: (theme) => theme.palette.ButtonColor.main,
        color: "#FFF",
        borderRadius: "0px",
        marginTop: "20px",
        border: "1px solid #FF8000",
        "&:hover": {
          backgroundColor: "#FFF",
          color: "#FF8000",
        },
      }}
    >
      {text}
    </Button>
  );
}

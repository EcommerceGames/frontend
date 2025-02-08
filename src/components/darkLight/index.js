import { IconButton, useColorScheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import React from "react";

export default function DarkLight() {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      sx={{
        bgcolor: mode === "light" ? "#f5f5f5" : "#333",
        color: mode === "light" ? "#333" : "#f5f5f5",
        "&:hover": {
          bgcolor: mode === "light" ? "#e0e0e0" : "#444",
        },
        borderRadius: "50%",
        boxShadow: 2,
        width: 40,
        height: 40,
      }}
    >
      {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}

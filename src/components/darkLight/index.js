import { Button, useColorScheme } from "@mui/material";
import React from "react";

export default function DarkLight() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      variant="contained"
    >
      {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </Button>
  );
}

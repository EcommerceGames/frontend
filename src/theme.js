import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  GameZone: {
    heightHeader: "102px",
    paddingHeader: "15px",
    fontsizeTextHeader: "16px",
  },
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#161616",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#FF8000",
        },
        ButtonColor: {
          main: "#FF8000",
          contrastText: "#FFFFFF",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});

export default theme;

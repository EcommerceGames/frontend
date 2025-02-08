import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
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
          hint: "#cdcdcd",
        },
        ButtonColor: {
          main: "#FF8000",
          contrastText: "#FFFFFF",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#FFFFFF",
        },
        text: {
          primary: "#161616",
        },
      },
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#48dac5",
      dark: "#3fc3a6",
    },
    secondary: {
      main: "#e8e8e8",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#48dac5",
          fontSize: 14,
          textTransform: "none",
          borderRadius: 20,
        },
        containedPrimary: {
          backgroundColor: "#48dac5",
          color: "#ffffff",
        },
        containedSecondary: {
          backgroundColor: "#e8e8e8",
          color: "#000000",
        },
      },
    },
  },
});

export default theme;

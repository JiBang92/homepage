import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    navbarTitle: {
      fontSize: "72px",
      fontFamily: "Righteous",
      background: "transparent",
    },
    bodyTitle: {
      fontSize: "32px",
      fontFamily: "Lilita One",
      textDecoration: "underline",
      background: "transparent",
    },
    body: {
      fontSize: "18px",
      fontFamily: "Outfit",
      background: "transparent",
    },
    footer: {
      fontsize: "16px",
      fontFamily: "Righteous",
      fontStyle: "italic",
      background: "transparent",
    },
  },
});

export default theme;

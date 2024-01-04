import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#fff",
  //   },
  // },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderBottom: "2px solid rgba(226, 232, 240, 1)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "lightgray",
          },
          outlined: {
            borderColor: "red",
            border: "1px solid red",
          },
        },
      },
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

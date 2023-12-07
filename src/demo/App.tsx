import {
  AppBar,
  Box,
  CssBaseline,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
  type PaletteMode,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setTopicTitle } from "../state/courseSlice/setTopicDetailsSlice";
import type { AppDispatch } from "../state/store";
import Editor from "./Editor";

export default function App() {
  const dispatch = useDispatch();

  const systemSettingsPrefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: light)"
  );
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(
    systemSettingsPrefersDarkMode ? "dark" : "light"
  );
  const togglePaletteMode = useCallback(
    () =>
      setPaletteMode((prevMode) => (prevMode === "light" ? "light" : "light")),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
          secondary: {
            main: "#42B81A",
          },
        },
      }),
    [paletteMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#fff",
          borderBottom: "2px solid rgba(226, 232, 241, 1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color={"black"}
            sx={{ flexGrow: 1 }}
          >
            Editor
          </Typography>

          {/* <IconButton onClick={togglePaletteMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: "70%", marginX: "2rem " }}
          id="outlined-basic"
          label="Enter title"
          variant="outlined"
          onChange={(event) => {
            dispatch(setTopicTitle(event.target.value));
          }}
        />
      </Box>
      <Box sx={{ p: 3, maxWidth: 1250, margin: "0 auto" }}>
        <Editor />
      </Box>
    </ThemeProvider>
  );
}

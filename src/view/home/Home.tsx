import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BellSvg from "../../assets/svg/bell.svg";
import MoonSvg from "../../assets/svg/moon.svg";
import { default as SearchSvg } from "../../assets/svg/search.svg";
import { AppDispatch } from "../../state/store";
import Body from "./components/Body";

import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "../../example/src/Themes/LightTheme";
import { useGetCoursesQuery } from "../../state/api/courseApiSlice";
function Home() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("authDetails") === null) {
  //     navigate("/sign-in");
  //   }
  // }),
  //   [];

  const dispatch = useDispatch<AppDispatch>();
  const {
    data: getCourses,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCoursesQuery("TEST");
  return (
    <>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={lightTheme}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              style={{
                flexGrow: 1,
                color: "#121729",
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              Hashnode
            </Typography>
            <Grid
              justifyContent={"end"}
              spacing={0.8}
              marginRight={"3rem"}
              container
            >
              <Grid item>
                <IconButton>
                  <img src={SearchSvg}></img>
                </IconButton>
              </Grid>

              <Grid item>
                <Button
                  disableElevation
                  variant="contained"
                  disableRipple
                  sx={{ textTransform: "none", borderRadius: "0.3rem" }}
                  onClick={() => {
                    navigate("/my-courses");
                  }}
                >
                  My Courses
                </Button>
              </Grid>

              <Grid item>
                <IconButton sx={{}}>
                  <img src={MoonSvg} />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton sx={{}}>
                  <img src={BellSvg}></img>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Body></Body>
      </ThemeProvider>
    </>
  );
}

export default Home;

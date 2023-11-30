import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BellSvg from "../assets/svg/bell.svg";
import MoonSvg from "../assets/svg/moon.svg";
import { default as SearchSvg } from "../assets/svg/search.svg";
import { AppDispatch } from "../state/store";
import Body from "./components/Body";

import { useGetCoursesQuery } from "../state/api/courseApiSlice";
function Home() {
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
      {console.log(getCourses)}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#fff",
          borderBottom: "2px solid rgba(226, 232, 240, 1)",
        }}
      >
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
              <IconButton sx={{}}>
                <img src={SearchSvg}></img>
              </IconButton>
            </Grid>

            <Grid item>
              <Button
                disableElevation
                variant="contained"
                sx={{ textTransform: "none", borderRadius: "1rem" }}
              >
                <Link to={"/my-courses"}> My Courses</Link>
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
    </>
  );
}

export default Home;

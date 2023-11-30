import AddIcon from "@mui/icons-material/Add";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../home/components/Card";
import { CourseGetState } from "../state/api/courseApiSlice";
import { useGetUserCoursesQuery } from "../state/api/fetchUserCoursesSlice";

const drawerWidth = 400;
const fabStyle = {
  right: 20,
  position: "fixed",
};
export default function ClippedDrawer() {
  const [isCourseClicked, setCourseClicked] = useState(false);

  const {
    data: userCourses,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUserCoursesQuery("getUserQuery");
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderBottom: "2px solid rgba(226, 232, 240, 1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            fontSize={"1.25rem"}
            fontWeight={"bold"}
            variant="h6"
            color={"black"}
            noWrap
            component="div"
          >
            My Courses
          </Typography>

          <Button
            disableElevation
            sx={{ borderRadius: "2rem", textTransform: "none" }}
            variant={"contained"}
          >
            <Link to={"/create-course"}> Create Course</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box display={"flex"} width={"100%"} marginTop={"4rem"} bgcolor={"red"}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {}
              {isSuccess ? (
                (console.log(userCourses),
                userCourses.map((courses: CourseGetState, index: number) => (
                  <ListItem
                    sx={{ borderRadius: "1rem" }}
                    key={courses.id}
                    disablePadding
                    onClick={() => {
                      setCourseClicked(true);
                    }}
                  >
                    <ListItemButton sx={{ borderRadius: "1rem" }}>
                      <Typography
                        sx={{
                          fontWeight: "medium",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: "1",
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {courses.courseTitle}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                )))
              ) : (
                <></>
              )}
            </List>
          </Box>
        </Drawer>
        {isCourseClicked ? (
          <Box
            display={"grid"}
            marginX={"2rem"}
            gridTemplateColumns={"repeat(auto-fill, minmax(25rem, 1fr))"}
            columnGap={"1rem"}
            rowGap={"1rem"}
          >
            <Card></Card>

            <Fab
              style={{ bottom: 20, right: 20, position: "fixed" }}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </Box>
        ) : (
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Typography>HI</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CourseGetState } from "../../state/api/courseApiSlice";
import { useGetUserCoursesQuery } from "../../state/api/fetchUserCoursesSlice";
import { setUserSelectedCourse } from "../../state/courseSlice/setUserCourseSlice";
import { AppDispatch } from "../../state/store";
import TopicPaneScreen from "./components/TopicsPaneScreen";
const drawerWidth = 400;
const fabStyle = {
  right: 20,
  position: "fixed",
};
export default function ClippedDrawer() {
  const [isCourseClicked, setCourseClicked] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
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
            disableRipple
            disableElevation
            sx={{ borderRadius: "0.3rem", textTransform: "none" }}
            variant={"contained"}
            onClick={() => navigate("/create-course")}
          >
            Create Course
          </Button>
        </Toolbar>
      </AppBar>
      <Box display={"flex"} width={"100%"} marginTop={"4rem"}>
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
                      dispatch(setUserSelectedCourse(courses.id));
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
          <TopicPaneScreen></TopicPaneScreen>
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

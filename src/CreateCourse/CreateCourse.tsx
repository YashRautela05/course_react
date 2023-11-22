import ArrowForward from "@mui/icons-material/ArrowForward";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseState, setCourseData } from "../state/courseSlice/courseSlice";
import { AppDispatch, RootState } from "../state/store";
function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const course = useSelector((state: RootState) => state.course);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(course);
  }, [course]);
  return (
    <>
      <CssBaseline> </CssBaseline>

      <Box>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            borderBottom: "2px solid rgba(226, 232, 240, 1)",
          }}
        >
          <Toolbar>
            <Typography
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.25rem" }}
            >
              Create Course
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          display={"flex"}
          height={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          padding={"2rem"}
        >
          <TextField
            required
            sx={{ width: "60%", marginY: "2rem" }}
            id="outlined-basic"
            label="Enter Course title"
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              console.log(event.target.value);
              setTitle(event.target.value);
            }}
            variant="outlined"
          ></TextField>
          <TextField
            required
            multiline
            sx={{ width: "60%" }}
            id="outlined-basic"
            value={description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              console.log(event.target.value);

              setDescription(event.target.value);
            }}
            rows={20}
            label="Enter Description"
            variant="outlined"
          ></TextField>
          <Fab
            style={{ bottom: 20, right: 20, position: "fixed" }}
            color="primary"
            aria-label="add"
            onClick={() => {
              let data: CourseState = {
                courseTitle: title,
                courseDescription: description,
              };
              dispatch(setCourseData(data));
            }}
          >
            {/* <Link to={"/editor"}> */} <ArrowForward></ArrowForward>
            {/* </Link> */}
          </Fab>
        </Box>
      </Box>
    </>
  );
}

export default CreateCourse;

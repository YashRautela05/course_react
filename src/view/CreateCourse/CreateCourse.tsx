import ArrowForward from "@mui/icons-material/ArrowForward";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CoursePostState,
  usePostCoursesMutation,
} from "../../state/api/courseApiSlice";
import { userAuthType } from "../../state/authUserDetailsSlice/authUserDetailsSlice";
import { RootState } from "../../state/store";
function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const course = useSelector((state: RootState) => state.course);
  const [postCourse, response] = usePostCoursesMutation();
  const navigate = useNavigate();
  useEffect(() => {}, [course]);
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
              let userAuthDetails = JSON.parse(
                localStorage.getItem("authDetails") ?? "[]"
              ) as userAuthType;
              let data: CoursePostState = {
                courseTitle: title,
                courseDescription: description,
                email: userAuthDetails.email,
              };

              postCourse(data);
              navigate(-1);
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

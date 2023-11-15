import ArrowForward from "@mui/icons-material/ArrowForward";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
let CreateCourse = () => {
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
            variant="outlined"
          ></TextField>
          <TextField
            required
            multiline
            sx={{ width: "60%" }}
            id="outlined-basic"
            rows={20}
            label="Enter Description"
            variant="outlined"
          ></TextField>
          <Fab
            style={{ bottom: 20, right: 20, position: "fixed" }}
            color="primary"
            aria-label="add"
          >
            <Link to={"/editor"}>
              {" "}
              <ArrowForward></ArrowForward>
            </Link>
          </Fab>
        </Box>
      </Box>
    </>
  );
};

export default CreateCourse;

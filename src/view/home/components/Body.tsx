import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CourseGetState,
  useGetCoursesQuery,
} from "../../../state/api/courseApiSlice";
import Card from "./Card";

export default function Body() {
  const navigate = useNavigate();
  const {
    data: getCourses,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCoursesQuery("TEST");

  useEffect(() => {
    if (isError) {
      navigate("/sign-in");
    }
  }, [isError, navigate]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          height: "100%",
          paddingTop: "2rem",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"inherit"}
          alignItems={"center"}
          gap={"1rem"}
          maxWidth={"728px"}
          justifyContent={"center"}
        >
          {isLoading ? (
            <center>
              {" "}
              <p>Loading</p>
            </center>
          ) : (
            <></>
          )}
          {isSuccess ? (
            getCourses.content.map((course: CourseGetState, index: number) => {
              return (
                <Card
                  key={course.id}
                  id={`${course.id}`}
                  courseTitle={`${course.courseTitle}`}
                  description={`${course.description}`}
                  email={`${course.email}`}
                  createdAt={`${course.createdAt}`}
                ></Card>
              );
            })
          ) : (
            <div></div>
          )}
        </Box>
      </Box>
    </>
  );
}

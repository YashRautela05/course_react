import Box from "@mui/material/Box";
import {
  CourseGetState,
  useGetCoursesQuery,
} from "../../../state/api/courseApiSlice";
import Card from "./Card";

export default function Body() {
  const {
    data: getCourses,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCoursesQuery("TEST");
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
              console.log(index, course);
              return (
                <Card
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

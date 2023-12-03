import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TopicsState,
  useFetchTopicByCourseIdQuery,
} from "../../../state/api/fetchTopicsByCourseIdSlice";
import { AppDispatch, RootState } from "../../../state/store";
import BlogCard from "./BlogCard";

let TopicPaneScreen = () => {
  const courseId = useSelector((state: RootState) => state.topicsByCourseID);
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: getTopics,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useFetchTopicByCourseIdQuery(courseId);
  const navigate = useNavigate();

  return (
    <>
      <Box
        display={"grid"}
        marginX={"2rem"}
        paddingTop={"2rem"}
        gridTemplateColumns={"repeat(auto-fill, minmax(25rem, 1fr))"}
        columnGap={"1rem"}
        rowGap={"1rem"}
      >
        {isLoading ? <p>Loading</p> : <></>}
        {isSuccess ? (
          (console.log(getTopics),
          getTopics.map((topics: TopicsState, index: number) => {
            return (
              <BlogCard
                key={topics.id}
                id={topics.id}
                title={topics.title}
                blog={topics.blog}
                email={topics.email}
                dateAdded={topics.dateAdded}
                courseId={topics.courseId}
              ></BlogCard>
            );
          }))
        ) : (
          <></>
        )}
        <Fab
          onClick={() => {
            navigate("/editor");
          }}
          style={{ bottom: 20, right: 20, position: "fixed" }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};

export default TopicPaneScreen;

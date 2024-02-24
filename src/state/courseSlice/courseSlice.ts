import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit/";
import axios from "axios";
import { CoursePostState } from "../api/courseApiSlice";

const initialState: CoursePostState = {
  courseTitle: "dummy",
  description: "dummyDesc",
  email: "dummyEmail",
};

const BASE_URL: string = "http://localhost:8080/api/v1/course";

export const fetchCourse = createAsyncThunk("course/getCourse", async () => {
  const response = await axios({
    method: "get",
    baseURL: BASE_URL,
    url: "/allcourses",
  });
  return response.data;
});
// export const postCourse = createAsyncThunk(
//   "course/postCourse",
//   async (data: CourseState) => {
//     let userAuthDetails = JSON.parse(
//       localStorage.getItem("authDetails") ?? "[]"
//     ) as userAuthType;
//     const response = await axios({
//       method: "post",
//       baseURL: BASE_URL,

//       url: "/save-course",
//       data: {
//         courseTitle: data.courseTitle,
//         description: data.courseDescription,
//         email: userAuthDetails.email,
//       },
//     });
//     return response.data;
//   }
// );
const courseSlice = createSlice({
  name: "Course",
  initialState: initialState,
  reducers: {
    setCourseData: (state, actions: PayloadAction<CoursePostState>) => {
      return {
        ...state,
        ...actions,
      };
    },
  },
});
export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;

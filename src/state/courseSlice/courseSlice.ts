import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit/";
import axios from "axios";

export interface CourseState {
  courseTitle: string;
  courseDescription: string;
}

const initialState: CourseState = {
  courseTitle: "dummy",
  courseDescription: "dummyDesc",
};

const BASE_URL: string = "http://localhost:8080/api/v1/course";

export const fetchCourse = createAsyncThunk("course/getCourse", async () => {
  const response = await axios({
    method: "get",
    baseURL: BASE_URL,
    url: "/allcourses",
  });
  console.log(response.data);
  return response.data;
});
export const postCourse = createAsyncThunk(
  "course/postCourse",
  async (data: CourseState) => {
    const response = await axios({
      method: "post",
      baseURL: BASE_URL,

      url: "/save-course",
      data: {
        courseTitle: data.courseTitle,
        description: data.courseDescription,
        email: "rajsalu15@gmail.com",
      },
    });
    console.log(response.data);
    return response.data;
  }
);
const courseSlice = createSlice({
  name: "Course",
  initialState: initialState,
  reducers: {
    setCourseData: (state, actions: PayloadAction<CourseState>) => {
      return {
        ...state,
        ...actions,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCourse.pending, (state) => {})
      .addCase(postCourse.fulfilled, (state, action) => {
        console.log("Fullfileed");
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        console.log(state);
      });
  },
});
export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;

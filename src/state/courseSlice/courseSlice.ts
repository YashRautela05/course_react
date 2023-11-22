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
const BASE_URL: string = "";
export const postCourse = createAsyncThunk(
  "course/postCourse",
  async (data: CourseState) => {
    const response = await axios({
      method: "post",
      url: BASE_URL,
      data: {
        courseTitle: data.courseTitle,
        description: data.courseDescription,
      },
    });
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
      });
  },
});
export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;

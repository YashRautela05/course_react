import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

interface CourseState {
  courseTitle: String;
  courseDescription: String;
}

const initialState: CourseState = {
  courseTitle: "dummy",
  courseDescription: "dummyDesc",
};
const courseSlice = createSlice({
  name: "Course",
  initialState: initialState,
  reducers: {
    setCourseData: (state, action: PayloadAction<CourseState>) => {
      state = action.payload;
    },
  },
});

export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;

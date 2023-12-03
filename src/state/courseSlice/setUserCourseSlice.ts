import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const setUserCourseSlice = createSlice({
  name: "userSelectedCourse",
  initialState: "",
  reducers: {
    setUserSelectedCourse: (state, actions: PayloadAction<string>) => {
      state = actions.payload;
      return state;
    },
  },
});

export const { setUserSelectedCourse } = setUserCourseSlice.actions;
export default setUserCourseSlice.reducer;

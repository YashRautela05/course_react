import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { apiSlice } from "./api/courseApiSlice";
import { userCourseApiSlice } from "./api/fetchUserCoursesSlice";
import courseReducer from "./courseSlice/courseSlice";

export const store: Store = configureStore({
  reducer: {
    course: courseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userCourseApiSlice.reducerPath]: userCourseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(userCourseApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

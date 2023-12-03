import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { apiSlice } from "./api/courseApiSlice";
import { fetchTopicsByCourseIdSlice } from "./api/fetchTopicsByCourseIdSlice";
import { userCourseApiSlice } from "./api/fetchUserCoursesSlice";
import courseReducer from "./courseSlice/courseSlice";
import setTopicDetailsReducer from "./courseSlice/setTopicDetailsSlice";
import userCourseSliceReducer from "./courseSlice/setUserCourseSlice";
export const store: Store = configureStore({
  reducer: {
    course: courseReducer,
    topicsByCourseID: userCourseSliceReducer,
    setTopicDetails: setTopicDetailsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userCourseApiSlice.reducerPath]: userCourseApiSlice.reducer,
    [fetchTopicsByCourseIdSlice.reducerPath]:
      fetchTopicsByCourseIdSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(userCourseApiSlice.middleware)
      .concat(fetchTopicsByCourseIdSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

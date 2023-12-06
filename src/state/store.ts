import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { auth } from "./api/authApiSlice";
import { apiSlice } from "./api/courseApiSlice";
import { fetchTopicsByCourseIdSlice } from "./api/fetchTopicsByCourseIdSlice";
import { userCourseApiSlice } from "./api/fetchUserCoursesSlice";
import { uploadFileSlice } from "./api/uploadFileApiSlice";
import authUserDetailsSlice from "./authUserDetailsSlice/authUserDetailsSlice";
import courseReducer from "./courseSlice/courseSlice";
import setTopicDetailsReducer from "./courseSlice/setTopicDetailsSlice";
import userCourseSliceReducer from "./courseSlice/setUserCourseSlice";
export const store: Store = configureStore({
  reducer: {
    course: courseReducer,
    authUserDetails: authUserDetailsSlice,
    topicsByCourseID: userCourseSliceReducer,
    setTopicDetails: setTopicDetailsReducer,
    [auth.reducerPath]: auth.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userCourseApiSlice.reducerPath]: userCourseApiSlice.reducer,
    [fetchTopicsByCourseIdSlice.reducerPath]:
      fetchTopicsByCourseIdSlice.reducer,
    [uploadFileSlice.reducerPath]: uploadFileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(userCourseApiSlice.middleware)
      .concat(fetchTopicsByCourseIdSlice.middleware)
      .concat(auth.middleware)
      .concat(uploadFileSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

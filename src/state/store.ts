import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import courseReducer from "./courseSlice/courseSlice";

export const store: Store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

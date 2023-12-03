import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type topicDetailsState = {
  topicName: string;
  topicBlog: string;
};

let initialTopicDetailState: topicDetailsState = {
  topicName: "initial Topic name",
  topicBlog: "initial Topic Blog",
};

let topicDetails = createSlice({
  name: "topicDetails",
  initialState: initialTopicDetailState,
  reducers: {
    setTopicTitle: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        topicName: action.payload,
      };
    },

    setTopicBlog: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        topicBlog: action.payload,
      };
    },
  },
});

export const { setTopicBlog, setTopicTitle } = topicDetails.actions;
export default topicDetails.reducer;

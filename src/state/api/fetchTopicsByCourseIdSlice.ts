import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TopicsState = {
  id: string;
  title: string;
  blog: string;
  email: string;
  dateAdded: string;
  courseId: string;
};

export type TopicPostState = {
  title: string;
  blog: string;
  email: string;
  courseId: string;
};
export const fetchTopicsByCourseIdSlice = createApi({
  reducerPath: "topics",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/topic",
  }),
  endpoints: (builder) => ({
    fetchTopicByCourseId: builder.query({
      query: (courseId: string) => `/course-topics/${courseId}`,
    }),
    postTopicsByCourseId: builder.mutation({
      query: (topic: TopicPostState) => ({
        method: "POST",
        url: "/save-topic",
        body: topic,
      }),
    }),
  }),
});

export const { useFetchTopicByCourseIdQuery, usePostTopicsByCourseIdMutation } =
  fetchTopicsByCourseIdSlice;

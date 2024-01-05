import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../authUserDetailsSlice/authUserDetailsSlice";

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
    // prepareHeaders: (headers, {}) => {
    //   let authDetail = JSON.parse(
    //     localStorage.getItem("authDetails") || "[]"
    //   ) as userAuthType;
    //   console.log(`email is ${authDetail.token}`);
    //   headers.set("Authorization", `Bearer ${authDetail.token}`);

    //   return headers;
    // },
    prepareHeaders: (headers, {}) => {
      try {
        return prepareHeaders(headers);
      } catch (error) {
        throw error;
      }
    },
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

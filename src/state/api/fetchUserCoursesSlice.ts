import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL: string = "http://localhost:8080/api/v1/course";

const getAuthToken = () => {
  return "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZGlzYWx1MTVAZ21haWwuY29tIiwiaWF0IjoxNzAxNzI3ODY3LCJleHAiOjE3MDE3MjkzMDd9.4SETF_fuRQ02ivfk3VBl0FQokIptXD2Z_ssr82VCbN4";
};
export const userCourseApiSlice = createApi({
  reducerPath: "api2",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getAuthToken();

      headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserCourses: builder.query({
      query: () => "/user-courses/adisalu15@gmail.com",
    }),
  }),
});
export const { useGetUserCoursesQuery } = userCourseApiSlice;

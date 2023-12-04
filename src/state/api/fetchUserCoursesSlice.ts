import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL: string = "http://localhost:8080/api/v1/course";

const getAuthToken = () => {
  return "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZGlzYWx1MTVAZ21haWwuY29tIiwiaWF0IjoxNzAxNjQ3NDE5LCJleHAiOjE3MDE2NDg4NTl9.xQgrrRQ0t88fiP8QfHpP7wmNvq-bcd7-qR3F4ILbd4E";
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

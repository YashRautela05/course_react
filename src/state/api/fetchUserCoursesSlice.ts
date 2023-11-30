import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL: string = "http://localhost:8080/api/v1/course";

const getAuthToken = () => {
  return "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZGlzYWx1MTVAZ21haWwuY29tIiwiaWF0IjoxNzAxMzQ5MjU5LCJleHAiOjE3MDEzNTA2OTl9.tR7v1W7zqVJDj3YQU69QR-Mvf1eIp0Ptpfq3Apaqx70";
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

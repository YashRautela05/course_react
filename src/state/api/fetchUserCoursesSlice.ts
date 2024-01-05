import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  prepareHeaders,
  userAuthType,
} from "../authUserDetailsSlice/authUserDetailsSlice";

export const BASE_URL: string = "http://localhost:8080/api/v1/course";

export const userCourseApiSlice = createApi({
  reducerPath: "api2",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   let authDetail = JSON.parse(
    //     localStorage.getItem("authDetails") || "[]"
    //   ) as userAuthType;

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
    getUserCourses: builder.query({
      query: () => {
        let authDetail = JSON.parse(
          localStorage.getItem("authDetails") || "[]"
        ) as userAuthType;
        return {
          method: "GET",
          url: `/user-courses/${authDetail.email}`,
        };
      },
    }),
  }),
});

export const { useGetUserCoursesQuery } = userCourseApiSlice;

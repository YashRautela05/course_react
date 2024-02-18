import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../authUserDetailsSlice/authUserDetailsSlice";
export interface CoursePostState {
  courseTitle: string;
  description: string;
  email: string;
}

export const BASE_URL: string = "http://localhost:8080/api/v1/course";
export type CourseGetState = {
  id: string;
  courseTitle: string;
  description: string;
  email: string;
  createdAt: string;
};
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   let authDetail = JSON.parse(
    //     localStorage.getItem("authDetails") || "[]"
    //   ) as userAuthType;
    //   console.log(`email is ${authDetail.token}`);
    //   headers.set("Authorization", `Bearer ${authDetail.token}`);

    //   return headers;
    // },
    prepareHeaders: (headers) => {
      try {
        return prepareHeaders(headers);
      } catch (error) {
        throw error;
      }
    },
  }),

  tagTypes: ["courses"],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/allcourses",
    }),

    postCourses: builder.mutation({
      query: (course: CoursePostState) => ({
        url: "/save-course",
        method: "POST",
        body: course,
      }),
    }),
    patchCourse: builder.mutation({
      query: (course: CourseGetState) => ({
        url: "",
        method: "PATCH",
        body: course,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id: string) => ({
        url: "",
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  usePostCoursesMutation,
  useDeleteCourseMutation,
  usePatchCourseMutation,
} = apiSlice;

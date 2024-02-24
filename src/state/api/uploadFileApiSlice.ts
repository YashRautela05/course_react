import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { prepareHeaders } from "../authUserDetailsSlice/authUserDetailsSlice";

export const uploadFileSlice = createApi({
  reducerPath: "uploadFiles",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/files",
    prepareHeaders: (headers, {}) => {
      try {
        return prepareHeaders(headers);
      } catch (error) {
        throw error;
      }
    },
  }),

  endpoints: (builder) => ({
    uploadImages: builder.mutation({
      query: (file: File) => {
        let bodyFormData = new FormData();
        bodyFormData.append("file", file);
        return {
          url: "/images/post",
          method: "POST",

          body: bodyFormData,
          formData: true,
        };
      },
    }),

    uploadPdf: builder.mutation({
      query: (file: File) => {
        let bodyFormData = new FormData();
        bodyFormData.append("file", file);
        return {
          url: "/pdf/post",
          method: "POST",

          body: bodyFormData,
          formData: true,
        };
      },
    }),
  }),
});

export const { useUploadImagesMutation, useUploadPdfMutation } =
  uploadFileSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const uploadFileSlice = createApi({
  reducerPath: "uploadFiles",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/files" }),
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

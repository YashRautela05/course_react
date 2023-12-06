import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type signInPostType = {
  email: string;
  password: string;
};

export type signUpPostType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/auth",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: signInPostType) => ({
        method: "POST",
        url: "/authenticate",
        body: body,
      }),
    }),

    signUp: builder.mutation({
      query: (body: signUpPostType) => ({
        method: "POST",
        url: "/register",
        body: body,
      }),
    }),
  }),
});
export const { useSignInMutation, useSignUpMutation } = auth;

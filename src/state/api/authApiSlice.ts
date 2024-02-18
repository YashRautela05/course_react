import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type signInPostType = {
  username: string;
  password: string;
};

export type signUpPostType = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/users",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: signInPostType) => ({
        method: "POST",
        url: "/login",
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

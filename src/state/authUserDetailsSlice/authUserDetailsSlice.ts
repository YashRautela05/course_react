import { PayloadAction, createSlice } from "@reduxjs/toolkit/";
import axios from "axios";

import { jwtDecode } from "jwt-decode";

// Function to check if the token is expired
const isTokenExpired = (token: string, type: string) => {
  const decodedToken: any = jwtDecode(token);
  const currentTime = Date.now().valueOf() / 1000;
  console.log("Token expiry time: " + " type : " + type, decodedToken.exp);
  console.log("Current time: ", currentTime);
  return decodedToken.exp < currentTime;
};

const refreshToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users/refresh-token",
      {
        refresh_token: refreshToken,
      }
    );

    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Axios token expired" + error);
  }
};

export const prepareHeaders = async (headers: Headers) => {
  let authDetail = JSON.parse(
    localStorage.getItem("authDetails") || "[]"
  ) as userAuthType;

  if (isTokenExpired(authDetail.token, "Access token")) {
    if (!isTokenExpired(authDetail.refresh_token, "Refresh token")) {
      try {
        const newToken = await refreshToken(authDetail.refresh_token);
        authDetail.token = newToken.access_token;
        authDetail.refresh_token = newToken.refresh_token;
        localStorage.setItem("authDetails", JSON.stringify(authDetail));
      } catch (error) {
        // Refresh token is also expired or an error occurred, throw an error
        throw new Error("Refresh token expired" + error);
      }
    } else {
      // Access token is expired and refresh token is also expired, throw an error
      localStorage.removeItem("authDetails");
      throw new Error("Access token and refresh token expired");
    }
  }

  headers.set("Authorization", `Bearer ${authDetail.token}`);
  return headers;
};

export type userAuthType = {
  token: string;
  email: string;
  refresh_token: string;
};

let initialState: userAuthType = {
  email: "",
  token: "",
  refresh_token: "",
};

export const userAuthDetailsSlice = createSlice({
  name: "authDetails",
  initialState: initialState,
  reducers: {
    setUserAuthDetails: (state, action: PayloadAction<userAuthType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setUserAuthToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setUserRefreshToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        refresh_token: action.payload,
      };
    },
  },
});

export const { setUserAuthDetails, setUserAuthToken } =
  userAuthDetailsSlice.actions;
export default userAuthDetailsSlice.reducer;

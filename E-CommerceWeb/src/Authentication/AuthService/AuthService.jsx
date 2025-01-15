import React from "react";
import AxiosPublicInstance from "../AxiosInstances/AxiosPublicInstance";
import { jwtDecode } from "jwt-decode";

const AuthService = {
  //set access token
  setAccessToken: (token) => {
    localStorage.setItem("token", token);
  },
  //set Refresh Token
  setRefreshToken: (refreshToken) => {
    localStorage.setItem("refreshToken", refreshToken);
  },

  //Get access token
  getAccessToken: () => {
    const token = localStorage.getItem("token");
    return token ? token : null;
  },

  //Get refresh token
  getRefreshToken: () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken ? refreshToken : null;
  },
  //Get new tokens from the refresh token
  getNewTokens: (refreshToken) => {
    return AxiosPublicInstance.post("/auth/refresh-token", { refreshToken });
  },

  //Get AuthenticatedUser
  getAuthenticatedUser: async (userId, setAuthenticatedUser) => {
    try {
      const response = await AxiosPublicInstance.get(`/users/${userId}/user`);
      console.log("response: ", response);
      console.log("response data: ", response.data.data);
      if (response?.data?.data) {
        //setAuthenticatedUser
        setAuthenticatedUser(response.data.data);
      } else {
        console.log("Error retrieving the user");
      }
    } catch (error) {}
  },

  //Clearing local storage
  clearStorage: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  },

  //Clear local storage when user logs out.
  logout: (setAuthenticatedUser) => {
    localStorage.clear();
    setAuthenticatedUser(null);
  },
};

export default AuthService;

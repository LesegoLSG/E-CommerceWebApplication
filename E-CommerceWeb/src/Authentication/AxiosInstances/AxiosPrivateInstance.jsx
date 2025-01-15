import React from "react";
import AuthService from "../AuthService/AuthService";
import axios from "axios";
import { isTokenExpired, refreshTokens } from "../AuthService/AuthUtils";

//Base Url
const AxiosPrivateInstance = axios.create({
  baseURL: "http://localhost:9191/api/v1",
});

// Interceptor for requests
AxiosPrivateInstance.interceptors.request.use(
  async (config) => {
    const token = AuthService.getAccessToken();
    if (token) {
      if (isTokenExpired()) {
        console.log("Token expired, attempting to refresh...");
        const newConfig = await refreshTokens(config);
        if (newConfig) {
          return newConfig;
        } else {
          console.error("Token refresh failed. Redirecting to home...");
          // Optionally, redirect user to login if refresh fails
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosPrivateInstance;

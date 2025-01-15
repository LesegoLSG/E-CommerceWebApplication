// authUtils.js

import AuthService from "../AuthService/AuthService";
import { jwtDecode } from "jwt-decode";

// Get token expiration time
export const getTokenExpiration = () => {
  const token = AuthService.getAccessToken();
  if (token) {
    try {
      const payLoad = jwtDecode(token);
      if (payLoad.exp) {
        return payLoad.exp * 1000; // Convert to milliseconds
      }
    } catch (error) {
      console.error("Error decoding token", error);
    }
  }
  return null;
};

// Check if the token is expired
export const isTokenExpired = () => {
  const tokenExpiration = getTokenExpiration();
  const currentTime = new Date().getTime();
  return tokenExpiration && tokenExpiration < currentTime;
};

// Refresh tokens
export const refreshTokens = async (config) => {
  try {
    const refreshToken = AuthService.getRefreshToken();
    if (refreshToken) {
      const response = await AuthService.getNewTokens(refreshToken);
      if (response?.data?.data?.token && response?.data?.data?.refreshToken) {
        AuthService.setAccessToken(response.data.data.token);
        AuthService.setRefreshToken(response.data.data.refreshToken);
        config.headers.Authorization = `Bearer ${response.data.data.token}`;
        return config;
      }
    }
  } catch (error) {
    console.error("Could not refresh the token:", error);
  }
  return null;
};

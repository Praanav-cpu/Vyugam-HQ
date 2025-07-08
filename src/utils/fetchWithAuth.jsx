// src/utils/fetchWithAuth.js

import { refreshAccessToken } from "./auth";

export const fetchWithAuth = async (url, options = {}) => {
  let access = localStorage.getItem("access_token");

  options.headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${access}`,
  };

  let response = await fetch(url, options);

  if (response.status === 401) {
    const newAccess = await refreshAccessToken();
    if (newAccess) {
      options.headers["Authorization"] = `Bearer ${newAccess}`;
      response = await fetch(url, options); // retry
    } else {
      // Refresh token expired — logout user
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/signin";
    }
  }

  return response;
};

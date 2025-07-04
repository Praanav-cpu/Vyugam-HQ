import React from "react";
import { Navigate } from "react-router-dom";

// Dummy auth for now (replace with real check later)
const isAuthenticated = true; // change to false to simulate unauth

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;
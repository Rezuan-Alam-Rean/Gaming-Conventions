import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivetRoutes = ({ children }) => {
    const location = useLocation();
  const { user } = useContext(AuthContext);


  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivetRoutes;
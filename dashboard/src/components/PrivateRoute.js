import React from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const user = Cookies.get("user");

  console.log("Cookie 'user':", user);
  console.log("Type of 'user':", typeof user);

  if (!user) {
    console.log("No user cookie found, redirecting to login.");
    // window.location.href = "http://localhost:3000/login";
    window.location.href = "https://ksxchange.vercel.app/login";
    return null; 
  }

  return <Outlet />;
};

export default PrivateRoute;

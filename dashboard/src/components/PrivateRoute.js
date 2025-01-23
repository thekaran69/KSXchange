import React from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const user = Cookies.get("user");

  if (!user) {
    window.location.href = "https://ksxchange.vercel.app/login";
    return null; // Return `null` to prevent rendering anything else
  }

  return <Outlet />;
};

export default PrivateRoute;

import { useRouter } from "next/router";
import React from "react";
const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        Router.replace("/auth/login");
        return null;
      } else if (accessToken) {
        return <WrappedComponent {...props} />;
      }
    }
    return null;
  };
};

export default withAuth;

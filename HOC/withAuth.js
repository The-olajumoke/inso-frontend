import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [token, setToken] = useState(null);
    useEffect(() => {
      const authToken = localStorage.getItem("accessToken");
      if (!authToken) {
        router.replace("/auth/login");
      } else {
        setToken(authToken);
      }
    }, []);
    return !!token ? <Component {...props} /> : null;
  };
  return AuthenticatedComponent;
};

export default withAuth;

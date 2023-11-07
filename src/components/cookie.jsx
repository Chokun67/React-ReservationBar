import React from "react";
import { useCookies } from "react-cookie";

function cookie() {
  function MyComponent() {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    const setToken = (token) => {
      setCookie("token", {token}, { path: "/" });
    };

    const removeToken = () => {
      removeCookie("token", { path: "/" });
    };

    return <div>cookie</div>;
  }
}
export default cookie;

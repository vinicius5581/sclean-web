import React, { useEffect, useContext } from "react";
// import LoginLocalStrategy from "../components/login-local-strategy";
// import { UserContextProvider } from "../context/user-context";
import { UserContext } from "../context/user-context";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sclean.herokuapp.com";

export default function Logout() {
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    dispatch(
      {
        type: "LOGOUT"
      },
      []
    );
  });
  /* 
    <h1>Login Page</h1>

      <a class="google-btn" href="/auth/google">
        Google+
      </a>

      <a class="google-btn" href="/auth/facebook">
        Facebook
      </a>

      <form method="POST" action="/login">
        Enter Username: <input type="text" name="uname" />
        Enter Password: <input type="password" name="pw" />
        <input type="submit" value="Submit" />
      </form> 
    */

  return <h1>Logout</h1>;
}

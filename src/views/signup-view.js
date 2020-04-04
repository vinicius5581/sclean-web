import React from "react";
import SignupLocalStrategy from "../components/signup-local-strategy";
import { UserContextProvider } from "../context/user-context";

export default function Login() {
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

  return (
    <UserContextProvider>
      <SignupLocalStrategy />
    </UserContextProvider>
  );
}

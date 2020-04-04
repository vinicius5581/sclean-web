import React from "react";
import { Segment, Header } from "semantic-ui-react";
import LoginLocalStrategy from "../components/login-local-strategy";
import LoginGoogleStrategy from "../components/login-google-strategy";
import LoginFacebookStrategy from "../components/login-facebook-strategy";
import { UserContextProvider } from "../context/user-context";

export default function Accounts() {
  return (
    <UserContextProvider>
      <Segment basic>
        <Header as="h3">My Account</Header>

        <LoginLocalStrategy />
        <LoginGoogleStrategy />
        <LoginFacebookStrategy />
      </Segment>
    </UserContextProvider>
  );
}

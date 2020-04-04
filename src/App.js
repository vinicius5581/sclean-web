import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import CounterView from "./views/counter-view";
import ContactView from "./views/contact-view";
import LoginView from "./views/login-view";
import SingupView from "./views/signup-view";
import AccountsView from "./views/accounts-view";
import GithubCommit from "./components/github-commit";

export default function App() {
  return (
    <Container>
      <Router>
        <Menu>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/accounts">
            Accounts
          </Menu.Item>
          <Menu.Item as={Link} to="/counter">
            Counter
          </Menu.Item>
          <Menu.Item as={Link} to="/contacts">
            Contacts
          </Menu.Item>
          <Menu.Item as={Link} to="/githubapi">
            GitHub Api
          </Menu.Item>
          <Menu.Item as={Link} to="/login">
            Login
          </Menu.Item>
          <Menu.Item as={Link} to="/signup">
            Sign up
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/accounts">
            <AccountsView />
          </Route>
          <Route path="/counter">
            <CounterView />
          </Route>
          <Route path="/contacts">
            <ContactView />
          </Route>
          <Route path="/githubapi">
            <GithubCommit />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/signup">
            <SingupView />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

import React, { useContext } from "react";
import { Container, Menu } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import CounterView from "./views/counter-view";
import ContactView from "./views/contact-view";
import LoginView from "./views/login-view";
import LogoutView from "./views/logout-view";
import SingupView from "./views/signup-view";
import AccountsView from "./views/accounts-view";
import GithubCommit from "./components/github-commit";

import { UserContextProvider } from "./context/user-context";
import { UserContext } from "./context/user-context";

function UserLogin() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(UserContext);

  console.log("user", state);

  return state.user ? (
    <Menu.Item as={Link} to={`/logout`}>
      Logout
    </Menu.Item>
  ) : (
    <>
      <Menu.Item as={Link} to={`/login`}>
        Login
      </Menu.Item>
      <Menu.Item as={Link} to={`/signup`}>
        Sign up
      </Menu.Item>
    </>
  );
}

// function UserLogin() {
//   // eslint-disable-next-line no-unused-vars
//   const [state, dispatch] = useContext(UserContext);

//   console.log("user", state);

//   return state.user ? (
//     <Menu.Item as={Link} to={`/logout`}>
//       Logout
//     </Menu.Item>
//   ) : (
//     <>
//       <Menu.Item as={Link} to={`/login`}>
//         Login
//       </Menu.Item>
//       <Menu.Item as={Link} to={`/signup`}>
//         Sign up
//       </Menu.Item>
//     </>
//   );
// }

function Routes() {
  const [state, dispatch] = useContext(UserContext);
  console.log("Routes state", state);
  return (
    <>
      <Route exact path={`/`}>
        <h1>Home</h1>
      </Route>
      <Route path={`/accounts`}>
        <AccountsView />
      </Route>
      <Route path={`/counter`}>
        <CounterView />
      </Route>
      <Route path={`/contacts`}>
        <ContactView />
      </Route>
      <Route path={`/githubapi`}>
        <GithubCommit />
      </Route>
      <Route path={`/login`}>
        <LoginView />
      </Route>
      <Route path={`/logout`}>
        {!state.user ? <Redirect to="/" /> : <LogoutView />}
      </Route>

      <Route path={`/signup`}>
        <SingupView />
      </Route>
    </>
  );
}

export default function App() {
  console.log("process.env", process.env);

  return (
    <UserContextProvider>
      <Container>
        <Router basename={process.env.PUBLIC_URL}>
          <Menu>
            <Menu.Item as={Link} to={`/`}>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to={`/accounts`}>
              Accounts
            </Menu.Item>
            <Menu.Item as={Link} to={`/counter`}>
              Counter
            </Menu.Item>
            <Menu.Item as={Link} to={`/contacts`}>
              Contacts
            </Menu.Item>
            <Menu.Item as={Link} to={`/githubapi`}>
              GitHub Api
            </Menu.Item>
            <UserLogin />
          </Menu>

          <Switch>
            <Routes />
          </Switch>
        </Router>
      </Container>
    </UserContextProvider>
  );
}

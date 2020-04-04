// import React, { useState, createContext } from "react";

// // Create Context Object
// export const UserContext = createContext();

// // Create a provider for components to consume and subscribe to changes
// export const UserContextProvider = props => {
//   const [user, setUser] = useState();
//   console.log(UserContext);
//   return (
//     <UserContext.Provider value={[user, setUser]}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

import React, { useReducer, createContext } from "react";

// export const ContactContext = createContext();
export const UserContext = createContext();

const initialState = {
  user: null,
  error: null
};

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sclean.herokuapp.com";

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SIGNUP":
      fetch(`${url}/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          email: action.payload.email,
          password: action.payload.password
        })
      })
        .then(res => {
          console.log("res", res);
          return res;
        })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())
        .catch(err => err);

      return {
        user: {
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case "LOGIN":
      fetch(`${url}/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          email: action.payload.email,
          password: action.payload.password
        })
      })
        .then(res => {
          console.log("res", res);
          return res;
        })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())
        .catch(err => err);

      return {
        user: {
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case "LOGOUT":
      console.log("epa");
      fetch(`${url}/logout`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
        mode: "cors"
      })
        .then(res => {
          console.log("res", res);
          return res;
        })
        // .then(res => (res.ok ? res : Promise.reject(res)))
        // .then(res => res.json())
        .catch(err => err);
      return { user: null };
    default:
      throw new Error();
  }
};

export const UserContextProvider = props => {
  const [user, setUser] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

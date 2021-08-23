import { createContext, useEffect, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};

export const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = (action) => {
    setUser((u) => reducer(u, action));
  };

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

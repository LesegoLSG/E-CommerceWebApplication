import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useAuthenticatedUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  console.log("Context user", authenticatedUser);

  return (
    <UserContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
      {children}
    </UserContext.Provider>
  );
};

import React from "react";
import { UserContextProvider } from "./Context/UserContextProvider";
import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";

export const App = () => {
  console.log("App jsx is running")
  return (
      <UserContextProvider>
        <h1 className="text-black font-bold text-4xl text-center">
          React with Ankit Kumar Dubey is Important
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
  );
};

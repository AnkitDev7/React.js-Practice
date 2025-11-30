import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-center font-bold italic text-2xl mt-3">Please Login</div>;

  return <div className="text-center font-bold italic text-2xl mt-3 text-orange-400">Welcome {user.Username}</div>

};

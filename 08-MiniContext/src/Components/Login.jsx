import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

export const Login = () => {
  // UseContext ke through Data kaise bheja jata hai

  const [Username, setUsername] = useState("");
  const [Password, SetPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };

  return (
    <div className=" ">
      <h2 className="text-3xl text-center italic font-bold">LogIn</h2>

      <div className="flex gap-5  justify-center mt-5">
        <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="p-2 shadow outline-none w-[50vh] "
      />

      <input
        type="password"
        value={Password}
        onChange={(e) => SetPassword(e.target.value)}
        placeholder="Password"
        className="p-2 shadow outline-none w-[50vh] "
      />

      <button
        onClick={handleSubmit}
        className="bg-green-700 rounded-3xl px-10 py-2 text-white"
      >
        Submit
      </button>
      </div>
    </div>
  );
};

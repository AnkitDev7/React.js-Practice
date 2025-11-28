import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  //  const data = useLoaderData()
  const [data, setdata] = useState([]);

  useEffect(() => {
    const Github = async () => {
      try {
        const GithubApi = await fetch(
          "https://api.github.com/users/Itssinhashivam"
        );
        const DataApi = await GithubApi.json();
        console.log(DataApi);
        setdata(DataApi);
      } catch (error) {
        console.log(error);
      }
    };
    Github();
  }, []);


  return (
    <div className=" max-w-screen-xl mx-auto text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-evenly items-center">

       <img src={data.avatar_url} alt=""  className="rounded-full"/>

      <h1 className="text-center text-amber-500  font-bold text-4xl">
        Github Followers:- {data ? data.followers : "Loading..."}
      </h1>
    </div>
  );
};


// export const githubInfoLoder = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };

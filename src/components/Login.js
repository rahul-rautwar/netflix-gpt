import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix logo"
        />
      </div>

      <form className="w-3/12 relative  p-12 text-white bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          name=""
          placeholder="Email address"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button
          type="submit"
          name=""
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          Sign In
        </button>
        <p className="py-4 my-6">New to Netflix? Sign up Now.</p>
      </form>
    </div>
  );
};

export default Login;

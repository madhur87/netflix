import Header from "./Header";
import { BG_URL } from "../utils/constain";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-2">{isSignInForm ? "Sign In": "Sign Up"}</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-4 rounded bg-gray-800 border border-gray-600 w-full"
        />

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 rounded bg-gray-800 border border-gray-600 w-full"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 rounded bg-gray-800 border border-gray-500 w-full"
        />

        <button className="bg-red-600 p-2 my-4 w-full rounded font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix?" : "Already Register?"}
          <a className="cursor-pointer" onClick={toggleSignUpForm}>
            {isSignInForm ? " Sign Up " : " Sign In "}
          </a>
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;

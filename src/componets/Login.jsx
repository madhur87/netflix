import Header from "./Header";
import { BG_URL } from "../utils/constain";
import { useState, useRef } from "react";
import checkValidFormData from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate = useNavigate();

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate Form Data
    const message = checkValidFormData(
      email.current.value,
      password.current.value,
      isSignInForm,
      fullName?.current?.value,
    );
    setErrorMessage(message);
    if (message) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {
          navigate("/browser");
          return;
        })
        .catch((err) => {
          setErrorMessage(err.code + "-" + err.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(async (userCred) => {
          const user = userCred.user;

          await updateProfile(user, {
            displayName: fullName.current.value,
          });
          const {uid, email, displayName} = auth.currentUser
          dispatch(addUser({uid, email, displayName}));
          navigate("/browser");
          return;
        })
        .catch((err) => {
          setErrorMessage(err.code + "-" + err.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen w-screen overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-4 rounded bg-gray-800 border border-gray-600 w-full"
        />

        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 rounded bg-gray-800 border border-gray-600 w-full"
          />
        )}

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 rounded bg-gray-800 border border-gray-500 w-full"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="bg-red-600 p-2 my-4 w-full rounded font-semibold"
        >
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

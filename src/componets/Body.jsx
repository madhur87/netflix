import Login from "./login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Error from "./Error";
const Body = () => {
  const dispatch = useDispatch();
  const bobyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        // navigate("/browser");
      } else {
        dispatch(removeUser());
        //navigate("/");
      }
    });
  }, []);

  return <RouterProvider router={bobyRouter} />;
};

export default Body;

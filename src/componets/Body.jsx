import Login from "./login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
const Body = () => {
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

  return <RouterProvider router={bobyRouter} />;
};

export default Body;

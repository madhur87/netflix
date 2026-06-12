import Login from "./login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  ]);

  return <RouterProvider router={bobyRouter} />;
};

export default Body;

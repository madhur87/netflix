import Login from "./login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import GPTSearch from "./GPTSearch";
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
      path: "/search",
      element: <GPTSearch/>
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={bobyRouter} />;
};

export default Body;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";

import Register from "../pages/Register";
import DashBoard from "../pages/Dashboard";
import Project from "../pages/Project";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: ( 
        <App />
    ),
    children: [
      { path: "/DashBoard", element: <DashBoard /> },
      { path: "/login", element: <Login /> },
        {
        path: "/Cadastro",
        element: <Register />,
        },
         {
        path: "/DashBoard",
        element: <DashBoard />,
        },
         {
        path: "/Projetos",
        element: <Project />,
        },
        {
        path: "/NotFound",
        element: <NotFound />,
        }, {
        path: "/Profile",
        element: < Profile/>,
        },
  
    ],
  },
]);

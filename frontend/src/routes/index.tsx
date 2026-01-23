import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashBoard from "../pages/Dashboard";
import Project from "../pages/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: ( 
        <App />
    ),
    children: [
      { path: "/", element: <Home /> },
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
  
    ],
  },
]);

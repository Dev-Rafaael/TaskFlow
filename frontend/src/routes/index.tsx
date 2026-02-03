import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import { PrivateRoute } from "../routes/PrivateRoute";
import { PrivateLayout } from "../components/Layout/PrivateLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Register /> },

      {
        element: (
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        ),
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "projetos", element: <Project /> },
          { path: "profile", element: <Profile /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

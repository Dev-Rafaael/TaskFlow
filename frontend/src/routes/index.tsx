import { createBrowserRouter } from "react-router-dom";
import App from "../App";



import { PrivateRoute } from "../routes/PrivateRoute";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import { PrivateLayout } from "../shared/components/Layout/PrivateLayout";
import DashboardPage from "../pages/DashboardPage";
import ProjectPage from "../pages/ProjectPage";
import UserPage from "../pages/UserPage";
import NotFound from "../pages/NotFoundPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "cadastro", element: <Register /> },

      {
        element: (
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        ),
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "projetos/:projectId", element: <ProjectPage /> },
          { path: "profile", element: <UserPage /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

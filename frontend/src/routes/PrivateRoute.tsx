import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";
import type { JSX } from "react";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticate);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

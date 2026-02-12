import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export function AuthLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}

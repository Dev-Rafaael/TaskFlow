import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Navbar from "../NavBar";
import Footer from "../Footer";

export function PrivateLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>

        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
}

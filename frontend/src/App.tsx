import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
<div style={{ display: "flex" }}>
  <NavBar />

  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
    <main style={{ flex: 1 }}>
      <Outlet />
    </main>
<ToastContainer/>
    <Footer />
  </div>
</div>
    </>
  );
}

export default App;

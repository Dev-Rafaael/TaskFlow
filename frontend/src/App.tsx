import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;

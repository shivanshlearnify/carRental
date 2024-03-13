import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollTop/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

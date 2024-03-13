import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

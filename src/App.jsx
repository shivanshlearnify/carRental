import "./App.css";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <ScrollTop />
      <Toaster/>
      <Outlet />
    </div>
  );
}

export default App;

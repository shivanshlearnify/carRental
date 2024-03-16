import "./App.css";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { Toaster } from "react-hot-toast";
import MyState from "./context/MyState";

function App() {
  return (
    <MyState>
      <ScrollTop />
      <Toaster />
      <Outlet />
    </MyState>
  );
}

export default App;

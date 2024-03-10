import "./App.css";
import Booking from "./components/booking/Booking";
import HeroComponent from "./components/heroComponent/HeroComponent";
import Navbar from "./components/navbar/Navbar";

function App() {
  return <div>
    <Navbar/>
    <HeroComponent/>
    <Booking/>
  </div>;
}

export default App;

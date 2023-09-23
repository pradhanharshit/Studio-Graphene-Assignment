import "./App.css";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import "../src/components/UpperNavbar/UpperNavbar.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./components/Navbar/Navbar.css";
import "./components/Home/Home.css";

function App() {
  return (
    <Home>
      <UpperNavbar />
      <Navbar />
    </Home>
  );
}

export default App;

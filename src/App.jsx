// 2 reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="container">
      <Navbar />
      <h1>Pokedex Router Dom</h1>
      <Outlet />
    </div>
  );
}

export default App;

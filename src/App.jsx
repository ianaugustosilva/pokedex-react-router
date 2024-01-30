// 2 reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Pokedex Router Dom</h1>
      <Outlet />
    </div>
  );
}

export default App;

import "./App.css";
import { Outlet } from "react-router-dom";

// componentes
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1> Paginas App</h1>

      <NavBar />

      <Outlet />
    </div>
  );
}

export default App;

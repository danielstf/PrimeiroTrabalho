import "./App.css";

//2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

//componentes
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <NavBar />

      {/* 9 search  */}

      <SearchForm />

      <Outlet />
    </div>
  );
}

export default App;

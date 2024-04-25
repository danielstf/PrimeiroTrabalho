import "./App.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import { Outlet } from "react-router-dom";

// componentes
import NavBar from "./components/NavBar";

//context

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <h1> Paginas App</h1>

      <NavBar />

      <Outlet />
    </div>
  );
}

export default App;

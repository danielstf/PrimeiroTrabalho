import { useState } from "react";
import "./App.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  const n = 15;

  const [name] = useState("Matheus");

  const redTitle = false;

  return (
    <div>
      {/* css global */}
      <h1>React com CSS</h1>

      {/* css de components */}

      <MyComponents />

      <p>Esse paragrafo édo app.js ok fdp</p>

      {/* css Inline */}

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elementof foi estilizado deforma inline
      </p>

      {/* css Inline Dinamico*/}

      <h2 style={n > 10 ? { color: "purple" } : { color: "black" }}>
        CSS Dinamico
      </h2>

      <h2
        style={
          name === "Matheus"
            ? { color: "red", backgroundColor: "yellow" }
            : null
        }
      >
        teste nome
      </h2>

      {/* Classe dinamica*/}

      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>

      {/* CSS modulos*/}
      <Title />
    </div>
  );
}

export default App;

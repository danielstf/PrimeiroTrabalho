import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>

      <table>
        <label>Nome:</label>
        <input></input>

        <label>Sobrenome: </label>
        <input></input>
      </table>
    </>
  );
}

export default App;

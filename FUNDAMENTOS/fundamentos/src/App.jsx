import { useState } from "react";

//CSS
import "./App.css";

//componentes
import Events from "./components/Events";
import PrimeiroComponente from "./components/PrimeiroComponente";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <PrimeiroComponente />
        <h1>Fundamentos</h1>

        <Events />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div>
      <h1>Forms</h1>
      <MyForm user={{ name: "Josias", email: "Jossias@gmail.com" }} />

      <h3>Testando 123</h3>
      <h4>tenteando 3456</h4>
      <h5>testenado 789</h5>
    </div>
  );
}

export default App;

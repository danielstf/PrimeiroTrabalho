import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div>
      <h1>Forms</h1>
      <MyForm user={{ name: "Josias", email: "Jossias@gmail.com" }} />
    </div>
  );
}

export default App;

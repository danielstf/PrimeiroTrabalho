import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div>
      <h1>Forms</h1>
      <MyForm
        user={{
          name: "Josias",
          email: "Jossias@gmail.com",
          bio: "Me chupe",
          role: "adm",
        }}
      />

      <h3>Testando 123</h3>
    </div>
  );
}

export default App;

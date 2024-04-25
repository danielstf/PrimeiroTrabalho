import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Paginas Home</h1>
      <button onClick={toggleTheme}>Botão</button>
      <p>Valor do Contador {theme}</p>
    </div>
  );
};

export default Home;

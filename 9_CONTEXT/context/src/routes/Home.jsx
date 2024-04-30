import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// 5 context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  //5 - contezt mais complexo

  const { color, dispatch } = useTitleColorContext();

  // 6 alterando state complexo

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Paginas Home</h1>
      <button onClick={toggleTheme}>Botão</button>
      <p>Valor do Contador {theme}</p>

      {/* 6 -alterando contexto complexo */}

      <div>
        <button onClick={() => setTitleColor("RED")}> vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}> Azul</button>
      </div>
    </div>
  );
};

export default Home;

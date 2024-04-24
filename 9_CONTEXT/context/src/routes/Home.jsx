import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>PaginasHome</h1>
      <p>Valor do Contador {counter}</p>
    </div>
  );
};

export default Home;

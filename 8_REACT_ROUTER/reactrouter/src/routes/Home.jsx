import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

//css
import "./Home.css";

const Home = () => {
  // Carregamento de dados

  const url = "http://localhost:3000/products";

  const { data: items, loadinf, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>

              <p>r$: {item.price}</p>

              {/* 4 roda dinamica*/}
              <Link to={`/products/${item.id}`}> Detalhes</Link>
            </li>
          ))}
      </ul>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  //const url = "http://localhost:3000/products?" + searchParams;

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Disponiveis</h1>

      <ul className="products">
        {items &&
          items.map((Product) => (
            <li key={Product.id}>
              <h2>{Product.name}</h2>

              <p>r$: {Product.price}</p>

              <Link to={`/products/${Product.id}`}> Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;

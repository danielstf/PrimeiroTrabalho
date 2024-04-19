import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 rota dinamica
  const { id } = useParams();

  // 5 carregamento dado individual

  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);
  return (
    <div>
      <p>ID do produto: {id} </p>

      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>carregamento....</p>}

      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
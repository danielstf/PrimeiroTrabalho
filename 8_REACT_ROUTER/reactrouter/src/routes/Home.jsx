import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { Table } from "flowbite-react";

//css
import "./Home.css";

const Home = () => {
  // Carregamento de dados

  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <>
      <div className="overflow-x-auto">
        <Table {items && items.map((item) => )} >
          <Table.Head>
            <Table.HeadCell>Nome</Table.HeadCell>
            <Table.HeadCell>Preço</Table.HeadCell>

            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Detalhes
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

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
    </>
  );
};

export default Home;

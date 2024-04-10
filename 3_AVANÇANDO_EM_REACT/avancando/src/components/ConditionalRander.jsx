import { useState } from "react";

const ConditionalRander = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Daniel");

  return (
    <div>
      <h1>Isso seraexibido</h1>
      {x && <p>se x for true, sim</p>}

      <h1>If Ternario</h1>

      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome Não encontrado</p>
        </div>
      )}

      <button onClick={() => setName("João")}>Clicar aqui</button>
    </div>
  );
};

export default ConditionalRander;

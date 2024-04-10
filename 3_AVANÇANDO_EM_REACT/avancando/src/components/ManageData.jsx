import { useState } from "react";

const ManageData = () => {
  let someDate = 10;
  console.log(someDate);

  const [number, setNumber] = useState(25);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someDate}</p>
        <button onClick={() => (someDate = 15)}>Mudar Variavel</button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(50)}>Mudar state</button>
      </div>
    </div>
  );
};

export default ManageData;

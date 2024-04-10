//css

import { useState } from "react";
import "./App.css";

//img
import Daniel2 from "./assets/daniel2.jpg";

//componentes
import CarDetails from "./components/CarDetails";
import ConditionalRander from "./components/ConditionalRander";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "amarelo", newCar: true, km: 0 },
    { id: 2, brand: "VW", color: "Preto", newCar: false, km: 0 },
    { id: 3, brand: "Chevrolet", color: "cinza", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente Pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => setMessage(msg);

  return (
    <div className="App">
      <h1>Acançando no React</h1>
      {/* Imagem empublic */}
      <div>
        <img src="/daniel1.avif" alt="Daniel fiorote 1" />
      </div>

      {/* Imagem em Assets */}

      <div>
        <img src={Daniel2} alt="daniel2" />
      </div>

      <ManageData></ManageData>
      <ListRender></ListRender>

      <ConditionalRander />

      {/* Props*/}

      <ShowUserName name="Matheus" />

      {/* Destructuning*/}

      <CarDetails brand="Gm" km={150000} color="Red" newCar={false} />

      {/* reaproveitamento */}

      <CarDetails brand="vw" km={150000} color="Red" newCar={true} />
      <CarDetails brand="Gm" km={150000} color="Red" newCar={false} />
      <CarDetails brand="che" km={150000} color="Red" newCar={true} />

      {/* Loop emarray deobjetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Children */}

      <Container myValue="Chupeme do myvalue">
        <p>E este é o conteudo do container</p>
      </Container>

      <Container myValue="Chupeme do myvalue">
        <h5>TEstando h no compainer</h5>
      </Container>

      {/* Executar Função*/}

      <ExecuteFunction myFunction={showMessage} />

      {/* state lift*/}

      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;

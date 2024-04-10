import React from "react";

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhe do Carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>cor: {color}</li>
      </ul>
      {newCar && <p>Esse carro e novo</p>}
    </div>
  );
};

export default CarDetails;

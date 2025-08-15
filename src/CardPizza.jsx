import React from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  return (
    <div>
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{ maxWidth: "200px" }} />
      <p>Precio: ${pizza.price}</p>
      <Link to={`/pizza/${pizza.id}`}>Ver más</Link>
    </div>
  );
};

export default CardPizza;


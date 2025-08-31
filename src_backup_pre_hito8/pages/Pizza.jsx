import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} style={{ maxWidth: "300px" }} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;

  
import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error cargando las pizzas:", err));
  }, []);

  return (
    <div className="home-container">
      <h2>🍕 Nuestras Pizzas</h2>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.img} alt={pizza.name} style={{ width: "200px" }} />
            <h3>{pizza.name}</h3>
            <p>{pizza.desc}</p>
            <p><strong>${pizza.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

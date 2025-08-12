import { useCart } from "./CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const pizzas = [
    { id: 1, name: "Margarita", price: 8000 },
    { id: 2, name: "Pepperoni", price: 9500 },
  ];

  return (
    <div>
      <h2>Home</h2>
      {pizzas.map(pizza => (
        <div key={pizza.id}>
          <p>{pizza.name} - ${pizza.price}</p>
          <button onClick={() => addToCart(pizza)}>Añadir</button>
        </div>
      ))}
    </div>
  );
};

export default Home;

  
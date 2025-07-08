import CardPizza from "./CardPizza";
import { pizzas } from "./pizzas";

function Home() {
  return (
    <div>
      <h2>Nuestras Pizzas</h2>
      {pizzas.map(pizza => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Home;

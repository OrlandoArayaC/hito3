
import { useParams } from "react-router-dom";
import { pizzas } from "../pizzas";
import { useCart } from "../contexts/CartContext";

export default function Pizza() {
  const { id } = useParams();
  const pizza = pizzas.find(p => p.id === id);
  const { addToCart } = useCart();
  if (!pizza) return <p>Pizza no encontrada</p>;
  return (
    <div style={{padding:16}}>
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{width:360, maxWidth:"100%", borderRadius:8}} />
      <ul>{pizza.ingredients.map((ing,i)=><li key={i}>{ing}</li>)}</ul>
      <button onClick={()=>addToCart(pizza)}>Añadir al carrito</button>
    </div>
  );
}


import { pizzas } from "../pizzas";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { addToCart } = useCart();
  return (
    <div style={{padding:16}}>
      <h1>Pizzería Mamma Mía</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px,1fr))", gap:12}}>
        {pizzas.map(p => (
          <div key={p.id} style={{border:"1px solid #ddd", borderRadius:8, padding:12}}>
            <img src={p.img} alt={p.name} style={{width:"100%", height:140, objectFit:"cover", borderRadius:8}} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <div style={{display:"flex", gap:8}}>
              <button onClick={() => addToCart(p)}>Añadir</button>
              <Link to={`/pizza/${p.id}`}>Ver</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

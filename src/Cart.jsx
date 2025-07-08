import { useState } from "react";
import { pizzaCart } from "./pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(cart.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decrease = (id) => {
    setCart(cart.filter(p => !(p.id === id && p.quantity === 1)).map(p => (
      p.id === id ? { ...p, quantity: p.quantity - 1 } : p
    )));
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(p => (
        <div key={p.id}>
          <img src={p.img} alt={p.name} width="100" />
          <h3>{p.name}</h3>
          <p>Precio: ${p.price}</p>
          <p>Cantidad: {p.quantity}</p>
          <button onClick={() => decrease(p.id)}>-</button>
          <button onClick={() => increase(p.id)}>+</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
}

export default Cart;

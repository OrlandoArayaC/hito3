import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 && <p>Carrito vacío</p>}
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;

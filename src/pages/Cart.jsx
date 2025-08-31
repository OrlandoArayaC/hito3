import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();
  const { isAuth, sendCheckout } = useUser();
  const [status, setStatus] = useState(null);

  const handlePay = async () => {
    try {
      setStatus("loading");
      await sendCheckout(cart);
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{" "}
              <button onClick={() => removeFromCart(item.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total}</p>
      <button onClick={handlePay} disabled={!isAuth || cart.length === 0}>
        {isAuth ? "Pagar" : "Inicia sesión para pagar"}
      </button>
      {status === "loading" && <p>Procesando compra...</p>}
      {status === "success" && <p>¡Compra realizada con éxito! 🎉</p>}
      {status === "error" && <p>Error al realizar la compra</p>}
    </div>
  );
}

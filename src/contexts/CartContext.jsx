
import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) { setCart(prev => [...prev, item]); }
  function removeFromCart(id) { setCart(prev => prev.filter(p => p.id !== id)); }
  const total = useMemo(() => cart.reduce((acc, p) => acc + (p.price || 0), 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() { return useContext(CartContext); }

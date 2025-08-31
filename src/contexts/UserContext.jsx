import { createContext, useContext, useEffect, useMemo, useState } from "react";

const API_BASE = "http://localhost:5000"; // Ajusta si tu backend corre en otro puerto

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const isAuth = !!token;

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  useEffect(() => {
    if (email) localStorage.setItem("email", email);
    else localStorage.removeItem("email");
  }, [email]);

  async function authRequest(path, body) {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Error de autenticación");
    return res.json();
  }

  async function login({ email, password }) {
    const data = await authRequest("/api/auth/login", { email, password });
    if (data?.token) setToken(data.token);
    if (data?.email) setEmail(data.email);
    return data;
  }

  async function register({ email, password }) {
    const data = await authRequest("/api/auth/register", { email, password });
    if (data?.token) setToken(data.token);
    if (data?.email) setEmail(data.email);
    return data;
  }

  function logout() {
    setToken("");
    setEmail("");
  }

  async function getProfile() {
    const res = await fetch(`${API_BASE}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("No autorizado");
    const data = await res.json();
    if (data?.email) setEmail(data.email);
    return data;
  }

  async function sendCheckout(cart) {
    const res = await fetch(`${API_BASE}/api/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });
    if (!res.ok) throw new Error("Error al enviar carrito");
    return res.json();
  }

  const value = useMemo(
    () => ({ token, email, isAuth, login, register, logout, getProfile, sendCheckout }),
    [token, email]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export default function Navbar() {
  const { isAuth, email, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: 12 }}>
      <Link to="/">Home</Link>
      <Link to="/cart">Carrito</Link>
      {isAuth ? (
        <>
          <Link to="/profile">{email || "Perfil"}</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

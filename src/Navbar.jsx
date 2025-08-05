import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/register" style={{ marginRight: "1rem" }}>Register</Link>
      <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
      <Link to="/profile" style={{ marginRight: "1rem" }}>Profile</Link>
      <Link to="/cart" style={{ marginRight: "1rem" }}>🛒 Total: $xxx</Link>
    </nav>
  );
};

export default Navbar;

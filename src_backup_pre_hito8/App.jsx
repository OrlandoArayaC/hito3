import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Pizza from "./pages/Pizza";
import Cart from "./Cart";
import { UserProvider, UserContext } from "./UserContext";

const Profile = () => <h1>Perfil de usuario</h1>;
const Login = () => <h1>Login</h1>;
const Register = () => <h1>Register</h1>;
const Home = () => <h1>Home</h1>;

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to="/login" />;
};

const AuthRoute = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? <Navigate to="/" /> : children;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
          <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

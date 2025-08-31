import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

export default function Profile() {
  const { email, getProfile, logout } = useUser();
  const [me, setMe] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProfile();
        setMe(data);
      } catch {
        setMe(null);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Perfil</h2>
      <p>Email: {me?.email || email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

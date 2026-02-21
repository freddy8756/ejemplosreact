import "./Usuarios.css";
import { useEffect, useState } from "react";
import api from "./servicios/api";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get("/users");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener Usuarios: ", error);
      } finally {
        setLoading(false);
      }
    };
    obtenerUsuarios();
  }, []);

  if (loading) return <p>Cargando....</p>;

  return (
    <div className="usuarios-container">
      <h2>Usuarios Registrados</h2>
      <table className="usuarios-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eiminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td><button className="btn editar">Editar</button></td>
              <td><button className="btn eliminar">Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;

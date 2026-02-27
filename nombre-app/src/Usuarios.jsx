import "./Usuarios.css";
import { useEffect, useState } from "react";
import api from "./servicios/api";
import Registrousua from "./Registrousua.jsx";
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
              <td><button className="btn eliminar" onClick={() => eliminarUsuario(u.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Registrousua />
    </div>
  );
}
const eliminarUsuario = async (Usuarioid) =>{
  try {
    const response = await api.delete(
      `/users/${Usuarioid}`
    );
    console.log(response.data);
    alert("Usuario eliminado correctamente");
  }catch(error){
    console.error("Error al eliminar usuario:", error);
  }
};
export default Usuarios;

import "./Usuarios.css";
import { useEffect, useState } from "react";
import api from "./servicios/api";
import Registrousua from "./Registrousua.jsx";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const obtenerUsuarios = async () => {
    try {
      const response = await api.get("/usuarios/list");
      console.log(response.data);
      setUsuarios(response.data);
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener Usuarios: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  if (loading) return <p>Cargando....</p>;

  const editarUsuario = (usuario) => {
    setUsuarioEditado(usuario);
  };

  const eliminarUsuario = async (Usuarioid) => {
    try {
      await api.delete(`/usuarios/${Usuarioid}`);
      alert("Usuario eliminado correctamente");
      obtenerUsuarios(); 
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <div className="usuarios-container">
      <h2>Usuarios Registrados</h2>
      <table className="usuarios-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Password</th>
            <th>Rol</th>
            <th>Fecha_registro</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
  {usuarios.map((u) => (
    <tr key={u.id}>
      <td>{u.id}</td>
      <td>{u.nombre}</td>
      <td>{u.direccion}</td>
      <td>{u.telefono}</td>
      <td>{u.email}</td>
      <td>{u.password}</td>
      <td>{u.rol}</td>
      <td>{u.fecha_registro}</td>
      <td>
        <button className="btn editar" onClick={() => editarUsuario(u)}>
          Editar
        </button>
      </td>
      <td>
        <button className="btn eliminar" onClick={() => eliminarUsuario(u.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
      <Registrousua usuarioEditado={usuarioEditado} onGuardado={obtenerUsuarios} />
    </div>
  );
}

export default Usuarios;

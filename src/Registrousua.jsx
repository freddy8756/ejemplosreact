import React, { useState, useEffect } from "react";
import api from './servicios/api';
import './Resgitrousua.css';

function Registrousua({ usuarioEditado, onGuardado }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');

  useEffect(() => {
    if (usuarioEditado) {
      setNombre(usuarioEditado.nombre || '');
      setDireccion(usuarioEditado.direccion || '');
      setTelefono(usuarioEditado.telefono || '');
      setEmail(usuarioEditado.email || '');
      setPassword(usuarioEditado.password || '');
      setRol(usuarioEditado.rol || '');
      setFechaRegistro(usuarioEditado.fecha_registro || '');
    } else {
      setNombre('');
      setDireccion('');
      setTelefono('');
      setEmail('');
      setPassword('');
      setRol('');
      setFechaRegistro('');
    }
  }, [usuarioEditado]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const datosUsuario = { 
    nombre, 
    direccion, 
    telefono, 
    email, 
    password, 
    rol, 
    fecha_registro: fechaRegistro // usar el nombre correcto
  };

  try {
    if (usuarioEditado) {
      // actualizar
      const respuesta = await api.put(`/usuarios/${usuarioEditado.id}`, datosUsuario);
      console.log('Usuario actualizado: ', respuesta.data);
      alert('¡Usuario actualizado con éxito!');
    } else {
      // registrar
      const respuesta = await api.post('/usuarios/register', datosUsuario); // ruta correcta
      console.log('Usuario registrado: ', respuesta.data);
      alert('¡Usuario guardado con éxito!');
    }

    // limpiar formulario
    setNombre('');
    setDireccion('');
    setTelefono('');
    setEmail('');
    setPassword('');
    setRol('');
    setFechaRegistro('');
    if (onGuardado) onGuardado();

  } catch (error) {
    console.error('Error al guardar:', error);
    alert('Hubo un error al guardar el usuario');
  }
};


  return (
    <div className="pagina">
      <h2>{usuarioEditado ? "Editar usuario" : "Registrar usuario"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input
          type="text"
          placeholder="Rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        />
        <input
          type="date"
          placeholder="Fecha de Registro"
          value={fechaRegistro}
          onChange={(e) => setFechaRegistro(e.target.value)}
        />

        <p></p>
        <button type="submit">
          {usuarioEditado ? "Actualizar" : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Registrousua;

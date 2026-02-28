import React, { useState, useEffect } from "react";
import api from './servicios/api';
import './Resgitrousua.css';

function Registrousua({ usuarioEditado, onGuardado }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (usuarioEditado) {
      setUsername(usuarioEditado.username || '');
      setEmail(usuarioEditado.email || '');
      setPassword('');
    } else {
      setUsername('');
      setEmail('');
      setPassword('');
    }
  }, [usuarioEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datosUsuario = { username, email, password };

    try {
      if (usuarioEditado) {
        const respuesta = await api.put(`/users/${usuarioEditado.id}`, datosUsuario);
        console.log('Usuario actualizado: ', respuesta.data);
        alert('¡Usuario actualizado con éxito!');
      } else {
        const respuesta = await api.post('/users', datosUsuario);
        console.log('Usuario registrado: ', respuesta.data);
        alert('¡Usuario guardado con éxito!');
      }

      setUsername('');
      setEmail('');
      setPassword('');
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
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
          required={!usuarioEditado} 
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

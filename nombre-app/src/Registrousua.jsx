import React, { useState } from "react";
import api from './servicios/api';
import './Resgitrousua.css';

function Registrousua() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevousuario = { name, email, password };

    try {
      const respuesta = await api.post('/users', nuevousuario);
      console.log('Usuario registrado: ', respuesta.data);
      alert('¡Usuario guardado con éxito!');
      // limpiar formulario
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un error al registrar el usuario');
    }
  };

  return (
    <div className="pagina">
      <h2>Registrar usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          required
        />
        <p></p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Registrousua;

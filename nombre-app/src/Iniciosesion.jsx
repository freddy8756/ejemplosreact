import { useState } from "react";
import "./Iniciosesion.css";
import Iniciose from "./assets/usuarios.png";
import axios from "axios";

const Iniciosesion = ({ chVista }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credenciales = { username, password };
    try {
      const respuesta = await axios.post('/auth/login', credenciales);
      if (respuesta.data.token) {
        localStorage.setItem("token", respuesta.data.token);
        alert('Autenticacion autorizada');
        chVista('Usuarios');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      alert('Error en autenticación');
      console.error('error:', error);
    }
  };

  return (
    <div className="Iniciosesion">
      <h3>Inicio de sesion</h3>
         <div className="imagen">
        <ul>
            <li><img src={Iniciose}alt="usuarios"/></li>
        </ul>
      </div>
      <p>Escribe tu nombre:</p>
      <form onSubmit={handleSubmit}>
  <input 
    type="text" 
    placeholder="Usuario"
    onChange={(e) => setUsername(e.target.value)} 
  />
  <p>Escribe tu contraseña:</p>
  <input 
    type="password" 
    placeholder="Contraseña"
    onChange={(e) => setPassword(e.target.value)} 
  />
  <p></p>
  <button type="submit" className="boton">Iniciar</button>
  <button type="button" className="botin">Cancelar</button>
</form>

    </div>
  );
}

export default Iniciosesion;

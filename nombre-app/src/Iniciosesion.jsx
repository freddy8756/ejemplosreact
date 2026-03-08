import { useState } from "react";
import "./Iniciosesion.css";
import Iniciose from "./assets/usuarios.png";
import api from "./servicios/api";
import { useAuth } from "./Authcontex";

const Iniciosesion = ({ chVista }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credenciales = { username, password };
    try {
      const respuesta = await api.post('/auth/login', credenciales);
      if (respuesta.data.token) {
        login(respuesta.data.token);//se guarda el token y se actualiza el estado de autenticación
        alert('Autenticacion autorizada');
        chVista('Usuarios');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      alert('Error en autenticación',error);
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

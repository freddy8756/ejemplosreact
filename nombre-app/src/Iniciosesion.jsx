import { useState } from "react";
import "./Iniciosesion.css";
import Iniciose from "./assets/usuarios.png";

const Iniciosesion = ({chVista})=>{

  const [username, setUsername] = useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const credenciales = { username, password};
    try{
      const respuesta =await api.post('/auth/login', credenciales);
      if( respuesta.data.token){
        console.log(respuesta.data.token);//Guardamos el token en el contexto
        //redirigir al usuario aqui
        alert('Autenticacion autorizada');
        chVista('Usuarios');
      }else{
        alert('credenciales invalidas');
      }
    }catch(error){
      alert('error',error);
      console.error('error:',error);
    }
  }
  return (
    <div className="Iniciosesion">
      <h3>Inicio de sesion</h3>
         <div className="imagen">
        <ul>
            <li><img src={Iniciose}alt="usuarios"/></li>
        </ul>
      </div>
      <p>Escribe tu nombre:</p>
      <form ondSubmit={handleSubmit}>
       <input  onChange={(e) => setUsername(e.target.value)} />
       <p>Escribe tu contraseña:</p>
       <input onChange={(e) => setPassword(e.target.value)} />
       <p></p>
       <button className="boton" >Iniciar</button>
       <button className="botin">Cancelar</button>
      </form>
    </div>
  );
}

export default Iniciosesion;

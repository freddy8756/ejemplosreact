import PropTypes from "prop-types";
import miimagen from "./assets/images.jpg";
import iconoFacebook from './assets/imagen6.jpg';
import iconowatsap from './assets/imagen7.jpg';
import iconoyoutube from './assets/imagen5.jpg';
import iconoinstagram from './assets/imagen8.jpg';
import iconotiktok from './assets/tiktok.jpg';
import iconotich from './assets/tich.jpg';
import './Encabezado.css';
import Clima from "./Clima";
import { useAuth } from "./Authcontex";

function Encabezado({ cambiarvista }) {
  return (
    <div className="encabezadoDiv">
      <Logotipo />
      <Menu cambiarvista={cambiarvista} />
      <Redes />
    </div>
  );
}

function Logotipo() {
  return (
    <div className="logodiv">
      <img src={miimagen} alt="logo" />
    </div>
  );
}

function Menu({ cambiarvista }) {
  const { isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    logout(); //esto limpia el token y actualiza el estado
    cambiarvista("Inicio"); // opcional: redirige a inicio después de cerrar sesión
  };
  return (
    <div className="menudiv">
      <ul>
        <li onClick={() => cambiarvista("AcercaDe")}>Acerca de</li>
        <li onClick={() => cambiarvista("Productos")}>Productos</li>
        <li onClick={() => cambiarvista("Contacto")}>Contacto</li>
        <li onClick={() => cambiarvista("Iniciosesion")}>Inicio de sesion</li>
        <li onClick={() => cambiarvista("Sucursales")}>Sucursales</li>
        <li onClick={() => cambiarvista("CarritoDetalle")}>Carritodetalle</li>
        {isLoggedIn ? (
          <>
            <li onClick={() => cambiarvista("Usuarios")}>Usuarios</li>
            <li onClick={() => cambiarvista("Cards")}>Cards</li>
            <li onClick={() => cambiarvista("Categoria")}>Categoria</li>
            <li onClick={handleLogout}>Cerrar sesión</li>
          </>
        ) : (
          <li onClick={() => cambiarvista("Inicio")}>Inicio</li>
        )}
      </ul>
    </div>
  );
}


function Redes() {
  return (
    <div className="redesdiv">
      <ul>
        <li><img src={iconoFacebook} alt="Facebook" /></li>
        <li><img src={iconowatsap} alt="WhatsApp" /></li>
        <li><img src={iconoyoutube} alt="YouTube" /></li>
        <li><img src={iconoinstagram} alt="Instagram" /></li>
        <li><img src={iconotiktok} alt="TikTok" /></li>
        <li><img src={iconotich} alt="Twitch" /></li>
      </ul>
      <Clima/>
    </div>
  );
}

Menu.propTypes = {
  cambiarvista: PropTypes.func.isRequired,
};

Encabezado.propTypes = {
  cambiarvista: PropTypes.func.isRequired,
};

export default Encabezado;

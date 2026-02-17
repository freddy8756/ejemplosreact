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
  return (
    <div className="menudiv">
      <ul>
        <li onClick={() => cambiarvista("Inicio")}>Inicio</li>
        <li onClick={() => cambiarvista("AcercaDe")}>Acerca de</li>
        <li onClick={() => cambiarvista("Productos")}>Productos</li>
        <li onClick={() => cambiarvista("Contacto")}>Contacto</li>
        <li onClick={() => cambiarvista("Sucursales")}>Sucursales</li>
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

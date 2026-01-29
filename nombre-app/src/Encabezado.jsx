import miimagen from "./assets/images.jpg";
import iconoFacebook from './assets/imagen6.jpg';
import iconowatsap from './assets/imagen7.jpg';
import iconoyoutube from './assets/imagen5.jpg';
import iconoinstagram from './assets/imagen8.jpg';
import iconotiktok from './assets/tiktok.jpg';
import iconotich from './assets/tich.jpg';
import './Encabezado.css';
function Encabezado(){
    return (
    <div className="encabezadoDiv" >
       <Logotipo />
       <Menu />
       <Redes />
    </div>
    )
}


function Logotipo() {
  return( 
    <div className="logodiv">
        <img src={miimagen} alt="ytjj"></img>
    </div>
  )
}
function Menu(){
    return(
        <div className="menudiv">
            <ul>
                <li>inicio</li>
                <li>acerca de</li>
                <li>productos</li>
                <li>contacto</li>
                <li>sucursales</li>
            </ul>
        </div>
    )
}
function Redes(){
    return(
        <div className="redesdiv">
            <ul>
                <li><img src={iconoFacebook} alt='Facebook' ></img></li>
                <li><img src={iconowatsap} alt='watsap'></img></li>
                <li><img src={iconoyoutube} alt='youtube' ></img></li>
                <li><img src={iconoinstagram} alt='instagram'></img></li>
                <li><img src={iconotiktok} alt='tiktok'></img></li>
                <li><img src={iconotich} alt='tiwch'></img></li>
            </ul>
        </div>
    )
}
export default Encabezado

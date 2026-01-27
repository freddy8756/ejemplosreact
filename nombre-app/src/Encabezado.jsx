import miimagen from "./assets/images.jpg";
import iconoFacebook from './assets/descarga.jpg';
import iconowatsap from './assets/descarga (1).jpg';
import iconoyoutube from './assets/descarga.png';
import iconoinstagram from './assets/descarga (2).jpg';
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
    <div className="logotipoDiv">
        <img src={miimagen} alt="ytjj"></img>
    </div>
  )
}
function Menu(){
    return(
        <div className="menuDiv">
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
        <div className="redesDiv">
            <ul>
                <li><img src={iconoFacebook} alt='Facebook' ></img>k</li>
                <li><img src={iconowatsap} alt='watsap'></img></li>
                <li><img src={iconoyoutube} alt='youtube' ></img>k</li>
                <li><img src={iconoinstagram} alt='instagram'></img></li>
                <li>instagram</li>
                <li>youtube</li>
            </ul>
        </div>
    )
}
export default Encabezado

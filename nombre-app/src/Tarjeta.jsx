import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import Acercade from './Acercade';
import Productos from './Productos';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Iniciosesion from './Iniciosesion';  
import Cards from './Cards';
import Sucursales from './Sucursales';
import "./Tarjeta.css";
import PropTypes from 'prop-types';

function ContenedorTargetas( props ) {
  const vistas = {
    Inicio: <Inicio />,
    Usuarios: <Usuarios />,
    AcercaDe: <Acercade />,
    Cards: <Cards />,
    Productos: <Productos />,
    Contacto: <Contacto />,
    Iniciosesion: <Iniciosesion chVista={props.chVista}/>,
    Sucursales: <Sucursales />
  };

  return (
    <div className="tarjetadiv">
      {vistas[props.vista] || <Inicio />}
    </div>
  );
}


function Inicio() {
  return (
    <>
      
      
    </>
  );
}


ContenedorTargetas.propTypes = {
  vista: PropTypes.string.isRequired,
};

function Tarjeta({ vista }) {
  const zona = [
    {id: 1, name: "Carroseria", descripcion:"Un buen coche", src:coche},
    {id: 2, name: "Fabuloso", descripcion:"Un buen coche", src:cochea},
    {id: 3, name: "Auto clasico", descripcion:"Un buen coche", src:coches}
  ] 
  return (
    <div className="inicio">
      {vista !=="Usuarios" && vista !== "AcercaDe" && vista !== "Cards" && vista !== "Productos" && vista !== "Contacto"&& vista !== "Iniciosesion"  && vista !== "Sucursales" && (
       <>
          {zona.map((item) => (
            <div key={item.id} className="inicio-card">
              <h3>{item.name}</h3>
              <p>{item.descripcion}</p>
              <img src={item.src} alt={item.name} />
            </div>
          ))}
        </>
      )}
      
      <ContenedorTargetas vista={vista} />
    </div>
  );
}


export default Tarjeta;

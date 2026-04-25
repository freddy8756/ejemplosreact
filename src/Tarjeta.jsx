import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import Acercade from './Acercade';
import Productos from './Productos';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Iniciosesion from './Iniciosesion';  
import Cards from './Cards';
import CarritoDetalle from './Carritodetalle';
import Sucursales from './Sucursales';
import "./Tarjeta.css";
import PropTypes from 'prop-types';
import Categoria from './Categoria';
import { useAuth } from "./Authcontex.jsx"; // tu contexto de autenticación

function ContenedorTargetas(props) {
  const { user } = useAuth();

  const vistas = {
    Inicio: <Inicio />,
    Usuarios: <Usuarios />,
    AcercaDe: <Acercade />,
    Cards: user?.rol === "admin" ? <Cards /> : <Inicio />,   // solo admin
    Productos: <Productos />,
    CarritoDetalle: user?.rol === "admin" ? <CarritoDetalle /> : <Inicio />, // solo admin
    Contacto: <Contacto />,
    Categoria: user?.rol === "admin" ? <Categoria /> : <Inicio />, // solo admin
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


Tarjeta.propTypes = {
  vista: PropTypes.string.isRequired,
  chVista: PropTypes.func.isRequired
};



function Tarjeta({ vista, chVista }) {
  const zona = [
    {id: 1, name: "Carroseria", descripcion:"Un buen coche", src:coche},
    {id: 2, name: "Fabuloso", descripcion:"Un buen coche", src:cochea},
    {id: 3, name: "Auto clasico", descripcion:"Un buen coche", src:coches}
  ];

  return (
    <div className="inicio">
      {vista !== "Usuarios" && vista !== "AcercaDe" && vista !== "Cards" && vista !== "Productos" && vista !== "CarritoDetalle" && vista !== "Contacto" && vista !== "Iniciosesion" && vista !== "Sucursales" && vista !== "Categoria" && (
        <>
          {zona.map((item) => (
            <div key={item.id} className="inicio-card">
              <h3>{item.name}</h3>
              <p>{item.descripcion}</p>
              <img src={item.src} alt={item.name} />
              {/* ejemplo de uso de chVista */}
              <button onClick={() => chVista("Iniciosesion")}>Ir a login</button>
            </div>
          ))}
        </>
      )}
      <ContenedorTargetas vista={vista} chVista={chVista} />
    </div>
  );
}


export default Tarjeta;

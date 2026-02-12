import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import Acercade from './Acercade';
import Productos from './Productos';
import Contacto from './Contacto';  
import Sucursales from './Sucursales'
import "./Tarjeta.css";
import PropTypes from 'prop-types';

function ContenedorTargetas({ vista }) {
  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <Acercade />,
    Productos: <Productos />,
    Contacto: <Contacto />,
    Sucursales: <Sucursales />
  };

  return (
    <div className="tarjetadiv">
      {vistas[vista] || <Inicio />}
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
  return (
    <div className="tacs">
      {vista !== "AcercaDe" && vista !== "Productos" && vista !== "Contacto" && vista !== "Sucursales" && (
        <>
          <Doc name="carroseria" descripcion="Un buen coche" />
          <Dic name="fabuloso" descripcion="El más rápido de su tiempo" />
          <Dooc name="auto clásico" descripcion="Viejo coche" saludarfun={Saludar} />
        </>
      )}
      
      <ContenedorTargetas vista={vista} />
    </div>
  );
}


function Doc(props) {
  return (
    <div className="doc">
      <img src={coche} alt="coche" />
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
    </div>
  );
}

function Dic(props) {
  return (
    <div className="dic">
      <img src={cochea} alt="coche" />
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
    </div>
  );
}

function Dooc(props) {
  return (
    <div className="dooc">
      <img src={coches} alt="coche" />
      <h2>{props.name}</h2>
      <p>{props.descripcion}</p>
      <p>{props.saludarfun()}</p>
    </div>
  );
}

function Saludar() {
  
}

export default Tarjeta;

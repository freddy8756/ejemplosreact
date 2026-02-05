import coche from './assets/coche.jpg';
import cochea from './assets/descarga.jpg';
import coches from './assets/nd.jpg';
import "./Tarjeta.css";
import PropTypes from 'prop-types';

function ContenedorTargetas({ vista }) {
  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
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
      <TarjetComponent />
      <TarjetComponent />
      <TarjetComponent />
      <TarjetComponent />
      <TarjetComponent />
    </>
  );
}

function AcercaDe() {
  return <h2>Acerca de nosotros</h2>;
}
function Productos() {
  return <h2>Nuestros productos</h2>;
}
function Contacto() {
  return <h2>Contacto</h2>;
}
function Sucursales() {
  return <h2>Sucursales</h2>;
}

function TarjetComponent() {
  return (
    <div className="tarjeta">
      <h3>Tarjeta de producto</h3>
      <p>Descripción del producto</p>
    </div>
  );
}

ContenedorTargetas.propTypes = {
  vista: PropTypes.string.isRequired,
};

function Tarjeta({ vista }) {
  return (
    <div className="tacs">
      <Doc name="carroseria" descripcion="Un buen coche" />
      <Dic name="fabuloso" descripcion="El más rápido de su tiempo" />
      <Dooc name="auto clásico" descripcion="Viejo coche" saludarfun={Saludar} />
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
  return "¡Hola desde Dooc!";
}

export default Tarjeta;

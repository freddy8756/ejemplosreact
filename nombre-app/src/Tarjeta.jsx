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
  return ( 
    <>
     <TarjetComponen />
    </>
  )
}
function Productos() {
  return(
    <>
     <TarjetCompone />
    </>
  )
}
function Contacto() {
  return(
    <>
     <TarjetCompo />
    </>
  )
}
function Sucursales() {
  return(
    <>
     <TarjetComposi />
    </>
  )
}


function TarjetComponent() {
  return (
    <div className="tarjeta">
      <h3>Tarjeta de producto</h3>
      <p>Descripción del producto</p>
    </div>
  );
}
function TarjetComponen() {
  return (
    <div className="tarjeta">
      <h3>Acerca de</h3>
      <p>Lo que veras aqui son cosas como vehiculos antiguos que te pueden interesar para coleccionar o restaurar.</p>
    </div>
  );
}
function TarjetCompone() {
  return (
    <div className="tarjeta">
      <h3>Productos</h3>
      <p>Fabuloso hodson</p>
      <p>vosh vaguen</p>
      <p>vehiculo clasico</p>
      <p>carroseria</p>
    </div>
  );
}
function TarjetCompo() {
  return (
    <div className="tarjeta">
      <h3>Contacto</h3>
      <p>Telefono: 123456789</p>
      <p>Email: contacto@empresa.com</p>
      <p>Sitio web: https://www.empresa.com</p>
      <p>Año: 2001</p>
    </div>
  );
}
function TarjetComposi() {
  return (
    <div className="tarjeta">
      <h3>Sucursales</h3>
      <p>Ubicación: Calle Principal 123</p>
      <p>Horario: Lunes a Viernes 9am - 6pm</p>
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
  
}

export default Tarjeta;

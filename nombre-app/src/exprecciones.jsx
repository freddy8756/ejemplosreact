import "./Exprecciones.css";
import {APIProvider,Map,AdvancedMarker,Pin}from '@vis.gl/react-@google-maps';
function Expresiones(props) {
  const nombre = "Darck";
  const apellidos = "patner";

  return (
    <div className="zona">
      <Promociones name={props.name} />
      <h2>Expresiones</h2>
      <h3>Tu nombre es: {nombre} y tus apellidos son: {apellidos}</h3>
    </div>
  );
}

function Promociones({ name }) {
  if (name !== "") {
    const position = {lat:20.270993,ing: -97.955102};
    return (
      <div className="promosDiv">
        <h3>Sección de promos</h3>
        <p>Bienvenido {name}, aquí están tus actividades</p>
      </div>
    );
  }
  return <div><h3>No hay datos</h3></div>;
}

export default Expresiones;

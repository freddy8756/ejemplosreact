import "./Exprecciones.css";
import Mapa from "./mapa";
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
    return (
      <div className="promosDiv">
        <h3>Sección de promos</h3>
        <p>Bienvenido {name}, aquí están tus actividades</p>
        <Mapa
         lat={20.276324 }
         ing={-97.957975}
         nombre={"servicio sucursal"}
        />
      </div>
    );
  }
  return <div><h3>No hay datos</h3></div>;
}

export default Expresiones;

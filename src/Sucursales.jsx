import "./Sucursales.css";
import Mapa from "./Mapa";

function Sucursales() {
  const sedes = [
    { id: 1, name: "Alameda Auyante", descripcion: "Calle Mina", lat: 20.276324, lng: -97.957975 },
    { id: 2, name: "Parque Placentero", descripcion: "Calle Alvarado", lat: 20.276471, lng: -97.957765 },
    { id: 3, name: "Señorio de la Sal", descripcion: "Calle Florida", lat: 20.275731, lng: -97.957807 }
  ];

  return (
    <div className="sucursales">
      <div className="sedes">
        {sedes.map((sede) => (
          <Tarjeta key={sede.id} sede={sede} sedes={sedes} />
        ))}
      </div>
    </div>
  );
}

function Tarjeta({ sede, sedes }) {
  return (
    <div className="sucursal">
      <h3>{sede.name}</h3>
      <p>{sede.descripcion}</p>
      <p>{sede.lat}, {sede.lng}</p>
      <Mapa sucursal={sede} sucursales={sedes} />
    </div>
  );
}

export default Sucursales;

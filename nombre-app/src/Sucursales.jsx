import "./Sucursales.css"
function Sucursales() {
  return(
    <div className="sucursaless">
    <>
     <TarjetComposi />
     <TarjetComposise />
      <TarjetComposisew />
    </>
    </div>
  )
}
function TarjetComposisew() {
  return (
    <div className="sucursalesss">
      <h3>Parque placentero</h3>
      <p>Ubicación: Calle mmisericordia</p>
      <p>Horario: Lunes a Viernes 9am - 6pm</p>
    </div>
  );
}
function TarjetComposi() {
  return (
    <div className="sucursal">
      <h3>Mate</h3>
      <p>Ubicación: Calle Principal 123</p>
      <p>Horario: Lunes a Viernes 9am - 6pm</p>
    </div>
  );
}
function TarjetComposise() {
  return (
    <div className="sucursale">
      <h3>Alameda auyante</h3>
      <p>Ubicación: Calle mina</p>
      <p>Horario: Lunes a Viernes 9am - 6pm</p>
    </div>
  );
}

export default Sucursales;
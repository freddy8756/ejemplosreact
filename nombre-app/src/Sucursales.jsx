import "./Sucursales.css"
function Sucursales() {
  return(
    <>
     <TarjetComposi />
    </>
  )
}
function TarjetComposi() {
  return (
    <div className="sucursal">
      <h3>Sucursales</h3>
      <p>Ubicación: Calle Principal 123</p>
      <p>Horario: Lunes a Viernes 9am - 6pm</p>
    </div>
  );
}

export default Sucursales;
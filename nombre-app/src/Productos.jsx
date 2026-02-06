import "./Producto.css"
function Productos() {
  return(
    <>
     <TarjetCompone />
    </>
  )
}
function TarjetCompone() {
  return (
    <div className="producto">
      <h3>Productos</h3>
      <p>*Fabuloso hodson</p>
      <p>*vosh vaguen</p>
      <p>*vehiculo clasico</p>
      <p>*carroseria</p>
    </div>
  );
}
export default Productos
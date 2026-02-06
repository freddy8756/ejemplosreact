import "./Acercade.css"
function Acercade() {
  return ( 
    <>
     <TarjetComponen />
    </>
  )
}
function TarjetComponen() {
  return (
    <div className="acercade">
      <h3>Acerca de</h3>
      <p>Lo que veras aqui son cosas como vehiculos antiguos que te pueden interesar para coleccionar o restaurar.</p>
    </div>
  );
}
export default Acercade
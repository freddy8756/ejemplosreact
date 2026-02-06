import "./Contacto.css"
function Contacto() {
  return(
    <>
     <TarjetCompo />
    </>
  )
}
function TarjetCompo() {
  return (
    <div className="contacto">
      <h3>Contacto</h3>
      <p>Escribe tu nombre:</p>
      <input></input>
      <p>Escribe tu numero de telefono:</p>
      <input></input>
      <p>Escribe tu correo:</p>
      <input></input>
      <p></p>
      <button className="boton">Enviar</button>
    </div>
  );
}
export default Contacto;
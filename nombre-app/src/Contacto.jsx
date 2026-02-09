import { useState } from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <>
      <TarjetCompo />
    </>
  );
}

function TarjetCompo() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");

  const validar = () => {
    
    if (nombre.trim() === "") {
      setError("El nombre no puede estar vacío");
      return false;
    }
    if (!/^\d{10}$/.test(telefono)) {
      setError("El número de teléfono debe tener 10 dígitos");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(correo)) {
      setError("El correo electrónico no es válido");
      return false;
    }
    setError(""); 
    return true;
  };

  const enviar = () => {
    if (validar()) {
      alert("Datos enviados correctamente ✅");
    }
  };

  return (
    <div className="contacto">
      <h3>Contacto</h3>
      <p>Escribe tu nombre:</p>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <p>Escribe tu número de teléfono:</p>
      <input value={telefono} onChange={(e) => setTelefono(e.target.value)} />

      <p>Escribe tu correo:</p>
      <input value={correo} onChange={(e) => setCorreo(e.target.value)} />

      {error && <p className="error">{error}</p>} 

      <button className="boton" onClick={enviar}>Enviar</button>
    </div>
  );
}

export default Contacto;

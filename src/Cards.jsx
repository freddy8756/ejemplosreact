import { useState, useEffect } from "react";
import api from "./servicios/api.js";
import Formcarrito from "./Agregarcard.jsx";
import "./Cards.css";

function Cards() {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerCarritos = async () => {
    try {
      const response = await api.get("/carritos/list");
      setCarritos(response.data);
    } catch (error) {
      console.error("Error al obtener carritos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCarritos();
  }, []);

  if (loading) return <p>Cargando carritos...</p>;

  const eliminarCarrito = async (carritoid) => {
    try {
      await api.delete(`/carritos/${carritoid}`);
      alert("Carrito eliminado correctamente");
      obtenerCarritos();
    } catch (error) {
      console.error("Error al eliminar carrito:", error);
      alert("Error al eliminar carrito");
    }
  };

  return (
    <div className="cards-container">   
      <h2>Todos los Carritos</h2>
      {carritos.map((carrito) => (
        <div key={carrito.id} className="cards">
          <h3>Carrito ID: {carrito.id}</h3>
          <p>Usuario ID: {carrito.id_usuario}</p>
          <p>Fecha creación: {carrito.fecha_creacion}</p>
          <button className="doc" onClick={() => eliminarCarrito(carrito.id)}>Eliminar</button>
        </div>
        
      ))}
      <Formcarrito />
    </div>
    
  );
}

export default Cards;

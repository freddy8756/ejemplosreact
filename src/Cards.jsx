import { useState, useEffect } from "react";
import api from "./servicios/api.js";
import Formcarrito from "./Agregarcard.jsx";
import "./Cards.css";
import { useAuth } from "./Authcontex.jsx"; // contexto de autenticación

function Cards() {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user } = useAuth(); // obtenemos token y rol

  const obtenerCarritos = async () => {
    try {
      let response;
      if (user?.rol === "admin") {
        // admin ve todos los carritos
        response = await api.get("/carritos/list", {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        // cliente ve solo sus carritos
        response = await api.get(`/carritos/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
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
      await api.delete(`/carritos/${carritoid}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Carrito eliminado correctamente");
      obtenerCarritos();
    } catch (error) {
      console.error("Error al eliminar carrito:", error);
      alert("Error al eliminar carrito");
    }
  };

  return (
    <div className="cards-container">   
      <h2>{user?.rol === "admin" ? "Todos los Carritos" : "Mis Carritos"}</h2>
      {carritos.map((carrito) => (
        <div key={carrito.id} className="cards">
          <h3>Carrito ID: {carrito.id}</h3>
          <p>Usuario ID: {carrito.id_usuario}</p>
          <p>Fecha creación: {new Date(carrito.fecha_creacion).toLocaleDateString()}</p>
          
          {/* Solo admin puede eliminar */}
          {user?.rol === "admin" && (
            <button className="doc" onClick={() => eliminarCarrito(carrito.id)}>
              Eliminar
            </button>
          )}
        </div>
      ))}
      <Formcarrito />
    </div>
  );
}

export default Cards;

import React, { useState, useEffect } from "react";
import api from "./servicios/api.js";
import "./Agregarcard.css";
import { useAuth } from "./Authcontex.jsx"; // usamos el contexto

function FormCarrito({ carritoEditado, onGuardado, onCancelar }) {
  const [userId, setUserId] = useState("");
  const { user, token } = useAuth(); // obtenemos usuario y token

  useEffect(() => {
    if (carritoEditado) {
      setUserId(carritoEditado.id_usuario || "");
      console.log("Carrito editado:", carritoEditado);
    } else {
      // si es cliente, su id viene del contexto
      setUserId(user?.rol === "cliente" ? user.id : "");
    }
  }, [carritoEditado, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosCarrito = {
      id_usuario: Number(userId),
      fecha_creacion: new Date().toISOString()
    };

    try {
      if (carritoEditado) {
        await api.put(`/carritos/${carritoEditado.id}`, datosCarrito, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Carrito actualizado correctamente");
      } else {
        await api.post("/carritos", datosCarrito, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Carrito creado correctamente");
      }

      if (onGuardado) onGuardado();
      if (onCancelar) onCancelar();
    } catch (error) {
      console.error("Error al guardar carrito:", error);
      alert("Error al guardar carrito");
    }
  };

  return (
    <div className="Card-fo">
      <h2>{carritoEditado ? "Editar Carrito" : "Agregar Carrito"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Solo admin puede elegir el ID de usuario */}
        {user?.rol === "admin" && (
          <>
            <label>ID de usuario:</label>
            <input
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </>
        )}
        <button type="submit">
          {carritoEditado ? "Actualizar Carrito" : "Crear Carrito"}
        </button>
      </form>
    </div>
  );
}

export default FormCarrito;

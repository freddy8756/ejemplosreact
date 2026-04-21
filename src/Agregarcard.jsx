import React, { useState, useEffect } from "react";
import api from "./servicios/api.js";
import "./Agregarcard.css";

function FormCarrito({ carritoEditado, onGuardado, onCancelar }) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (carritoEditado) {
      setUserId(carritoEditado.id_usuario || "");
      console.log("Carrito editado:", carritoEditado);
    } else {
      setUserId("");
    }
  }, [carritoEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosCarrito = {
      id_usuario: Number(userId),
      fecha_creacion: new Date().toISOString()
    };

    try {
      if (carritoEditado) {
        await api.put(`/carritos/${carritoEditado.id}`, datosCarrito);
        alert("Carrito actualizado correctamente");
      } else {
        await api.post("/carritos", datosCarrito);
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
        <label>ID de usuario:</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit">
          {carritoEditado ? "Actualizar Carrito" : "Crear Carrito"}
        </button>
      </form>
    </div>
  );
}

export default FormCarrito;
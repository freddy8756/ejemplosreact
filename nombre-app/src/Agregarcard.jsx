import React, { useState, useEffect } from "react";
import api from "./servicios/api.js";
import "./Agregarcard.css";

function FormCarrito({ carritoEditado, onGuardado, onCancelar }) {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    if (carritoEditado) {
      setUserId(carritoEditado.userId || "");
      if (carritoEditado.products && carritoEditado.products.length > 0) {
        setProductId(carritoEditado.products[0].id || carritoEditado.products[0].productId || "");
        setQuantity(carritoEditado.products[0].quantity || "");
      }
    } else {
      setUserId("");
      setProductId("");
      setQuantity("");
    }
  }, [carritoEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosCarrito = {
      userId: Number(userId),
      products: [
        {
          productId: Number(productId),
          quantity: Number(quantity),
        },
      ],
    };

    try {
      if (carritoEditado) {
        await api.put(`/carts/${carritoEditado.id}`, datosCarrito);
        alert("Carrito actualizado correctamente");
      } else {
        await api.post("/carts", datosCarrito);
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
      <h2>{carritoEditado ? "Editar Carrito" : "agregar Carrito"}</h2>

      <form onSubmit={handleSubmit}>
        <label>ID de usuario:</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label>ID de producto:</label>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />

        <label>Cantidad:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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

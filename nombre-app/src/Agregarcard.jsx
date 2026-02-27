import React, { useState } from "react";
import api from "./servicios/api.js";
import "./Agregarcard.css";
function FormCarrito() {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoCarrito = {
      userId: Number(userId),
      products: [
        {
          productId: Number(productId),
          quantity: Number(quantity),
        },
      ],
    };

    try {
      const respuesta = await api.post("/carts", nuevoCarrito);
      console.log("Carrito creado:", respuesta.data);
      alert("Carrito creado");

      setUserId("");
      setProductId("");
      setQuantity("");

    } catch (error) {
      console.error("Error al crear carrito:", error);
      alert("Error al crear carrito");
    }
  };

  return (
    <div className="Card-fo">
      <h2>Crear Carrito</h2>

      <form onSubmit={handleSubmit}>
        <label>id de usuarios:</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label>id de productos:</label>
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

        <button type="submit">Crear Carrito</button>
      </form>
    </div>
  );
}

export default FormCarrito;
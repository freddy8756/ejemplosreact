import { useState, useEffect } from "react";
import api from "./servicios/api.js";
import FormCarrito from "./Agregarcard.jsx";
import "./Cards.css";

function Cards() {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carritoEditado, setCarritoEditado] = useState(null);

  const obtenerCarritos = async () => {
    try {
      const cartResponse = await api.get("/carts");
      const cartsData = cartResponse.data;

      const carritosConProductos = await Promise.all(
        cartsData.map(async (carrito) => {
          const productosCompletos = await Promise.all(
            carrito.products.map(async (item) => {
              const productResponse = await api.get(`/products/${item.productId}`);
              return {
                ...productResponse.data,
                quantity: item.quantity,
              };
            })
          );

          return {
            ...carrito,
            products: productosCompletos,
          };
        })
      );

      setCarritos(carritosConProductos);
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

  const eliminarCards = async (carritoid) => {
    try {
      await api.delete(`/carts/${carritoid}`);
      alert("Carrito eliminado correctamente");
      obtenerCarritos();
    } catch (error) {
      console.error("Error al eliminar carrito:", error);
      alert("Error al eliminar carrito");
    }
  };

  const editarCarrito = (carrito) => {
    setCarritoEditado(carrito);
  };

  return (
    <div className="cards-container">   
      <h2>Todos los Carritos</h2>
      {carritos.map((carrito) => (
        <div key={carrito.id} className="cards">
          <h3>Carrito ID: {carrito.id}</h3>
          {carrito.products.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.title} className="imagen"/>
              <h4 className="producto-titulo">{producto.title}</h4>
              <p className="producto-cantidad">Cantidad: {producto.quantity}</p>
              <p className="producto-precio">Precio: ${producto.price}</p>
              <button className="dic" onClick={() => editarCarrito(carrito)}>Editar</button>
              <button className="doc" onClick={() => eliminarCards(carrito.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      ))}
      <FormCarrito 
        carritoEditado={carritoEditado} 
        onGuardado={obtenerCarritos} 
        onCancelar={() => setCarritoEditado(null)} 
      />
    </div>
  );
}

export default Cards;

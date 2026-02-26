import './Cards.css';
import api from "./servicios/api";
import { useEffect, useState } from "react";

function Cards({id}) {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.warn("No se recibió un carrito");
      setLoading(false);
      return;
    }

    const obtenerCarrito = async () => {
      try {
        const response = await api.get(`/carts`);
        const productosCarrito = response.data.carrito;

        const detalles = await Promise.all(
          productosCarrito.map(async (pro) => {
            const resProd = await api.get(`/carts/products`);
            return { ...resProd.data, quantity: pro.quantity };
          })
        );

        setCarrito(detalles);
      } catch (error) {
        console.error("Error al obtener carrito: ", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerCarrito();
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  return (
    <main className="productos-container">
      {carrito.map((pro) => (
        <article key={pro.id} className="producto-card">
          <p>{pro.userId}</p>
          <p>{pro.date}</p>
          <p>{pro.products}</p>
        </article>
      ))}
    </main>
  );
}

export default Cards;

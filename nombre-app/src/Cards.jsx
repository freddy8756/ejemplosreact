import './Cards.css';
import api from "./servicios/api";
import { useEffect, useState } from "react";

function Cards({id}) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.warn("No se recibió un id válido para el carrito");
      setLoading(false);
      return;
    }

    const obtenerProductos = async () => {
      try {
        const response = await api.get(`/carts/${id}`);
        const productosCarrito = response.data.products;

        const detalles = await Promise.all(
          productosCarrito.map(async (pro) => {
            const resProd = await api.get(`/products/${pro.productId}`);
            return { ...resProd.data, quantity: pro.quantity };
          })
        );

        setProductos(detalles);
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  return (
    <main className="productos-container">
      {productos.map((pro) => (
        <article key={pro.id} className="producto-card">
          <img src={pro.image} alt={`Imagen de ${pro.title}`} />
          <p className="producto-titulo">{pro.title}</p>
          <p className="producto-precio">
            {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'USD' }).format(pro.price)}
          </p>
          <p className="producto-cantidad">Cantidad: {pro.quantity}</p>
        </article>
      ))}
    </main>
  );
}

export default Cards;

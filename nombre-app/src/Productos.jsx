import { useEffect, useState } from "react";
import coche from "./assets/coche.jpg";
import "./Producto.css";
import api from "./servicios/api";
import Registrarpro from "./Registrarpro";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoEditado, setProductoEditado] = useState(null);

  const obtenerProductos = async () => {
    try {
      const response = await api.get("/products");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando....</p>;

  const editarProducto = (producto) => {
    setProductoEditado(producto);
  };

  const eliminarProducto = async (productoid) => {
    try {
      await api.delete(`/products/${productoid}`);
      alert("Producto eliminado correctamente");
      obtenerProductos();
    } catch (error) {
      console.error("Error al eliminar producto: ", error);
      alert("Error al eliminar producto");
    }
  };

  return (
    <div>
      <main className="productos-container">
        {productos.map((pro) => (
          <article key={pro.id} className="producto-card">
            <p className="productos-titulo">{pro.title}</p>
            <p className="productos-precio">{pro.price}</p>
            <p className="productos-descripcion">{pro.description}</p>
            <p className="productos-categoria">{pro.category}</p>
            <img src={pro.image} alt={pro.title} />
            <p></p>
            <button className="dic" onClick={() => editarProducto(pro)}>
              Editar
            </button>
            <button className="doc" onClick={() => eliminarProducto(pro.id)}>
              Eliminar
            </button>
          </article>
        ))}
      </main>
      <Registrarpro productoEditado={productoEditado} onGuardado={obtenerProductos} />
    </div>
  );
}

export default Productos;

import { useEffect, useState } from "react";
import "./Producto.css";
import api from "./servicios/api";
import Registrarpro from "./Registrarpro";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoEditado, setProductoEditado] = useState(null);

  const obtenerProductos = async () => {
    try {
      const response = await api.get("/productos/list");
      console.log("Productos:", response.data);
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
      await api.delete(`/productos/${productoid}`);
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
            <p className="productos-titulo">{pro.nombre}</p>
<p className="productos-precio">${pro.precio}</p>
<p className="productos-descripcion">{pro.descripcion}</p>
<p className="productos-stock">Stock: {pro.stock}</p>
<p className="productos-fecha">Creado: {new Date(pro.createdAt).toLocaleDateString()}</p>
            {/*<img src={pro.imagen} alt={pro.nombre} />*/}
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

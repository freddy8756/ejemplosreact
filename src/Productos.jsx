import { useEffect, useState } from "react";
import "./Producto.css";
import api from "./servicios/api";
import Registrarpro from "./Registrarpro";
import { useAuth } from "./Authcontex.jsx"; // tu contexto de autenticación
import Agregarcard from "./Agregarcard.jsx";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoEditado, setProductoEditado] = useState(null);

  const { token, user } = useAuth(); // obtenemos token y rol

  const obtenerProductos = async () => {
    try {
      const response = await api.get("/productos/list", {
        headers: { Authorization: `Bearer ${token}` }
      });
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
      await api.delete(`/productos/${productoid}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
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
            <p className="productos-fecha">
              Creado: {new Date(pro.createdAt).toLocaleDateString()}
            </p>
            {/* Solo admin puede editar/eliminar */}
            {user?.rol === "admin" && (
              <>
                <button className="dic" onClick={() => editarProducto(pro)}>
                  Editar
                </button>
                <button className="doc" onClick={() => eliminarProducto(pro.id)}>
                  Eliminar
                </button>
              </>
            )}
          </article>
        ))}
      </main>
      {/* Solo admin puede registrar productos */}
      {user?.rol === "admin" && (
        <Registrarpro productoEditado={productoEditado} onGuardado={obtenerProductos} />
        
      )}
      
    </div>
    
  );
  
}

export default Productos;

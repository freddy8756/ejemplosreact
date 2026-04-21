import { useEffect, useState } from "react";
import apis from "./servicios/api";
import "./CarritoDetalle.css";

const CarritoDetalle = () => {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para crear/editar
  const [idCarrito, setIdCarrito] = useState("");
  const [idProducto, setIdProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [detalleEditado, setDetalleEditado] = useState(null);

  const obtenerDetalles = async () => {
    try {
      const response = await apis.get("/carrito_detalle/list");
      setDetalles(response.data);
    } catch (error) {
      console.error("Error al obtener detalles:", error);
      setError("No se pudieron cargar los detalles");
    } finally {
      setLoading(false);
    }
  };

  const crearDetalle = async (e) => {
    e.preventDefault();
    try {
      await apis.post("/carrito_detalle", {
        id_carrito: idCarrito,
        id_producto: idProducto,
        cantidad,
        precio_unitario: precioUnitario,
      });
      alert("Detalle agregado correctamente");
      limpiarFormulario();
      obtenerDetalles();
    } catch (error) {
      console.error("Error al crear detalle:", error);
      alert("Error al crear detalle");
    }
  };

  const eliminarDetalle = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este detalle?")) return;
    try {
      await apis.delete(`/carrito_detalle/${id}`);
      alert("Detalle eliminado correctamente");
      obtenerDetalles();
    } catch (error) {
      console.error("Error al eliminar detalle:", error);
      alert("Error al eliminar detalle");
    }
  };

  const editarDetalle = (detalle) => {
    setDetalleEditado(detalle);
    setCantidad(detalle.cantidad);
  };

  const actualizarDetalle = async (e) => {
    e.preventDefault();
    try {
      await apis.put(`/carrito_detalle/${detalleEditado.id}`, { cantidad });
      alert("Detalle actualizado correctamente");
      setDetalleEditado(null);
      setCantidad(1);
      obtenerDetalles();
    } catch (error) {
      console.error("Error al actualizar detalle:", error);
      alert("Error al actualizar detalle");
    }
  };

  const limpiarFormulario = () => {
    setIdCarrito("");
    setIdProducto("");
    setCantidad(1);
    setPrecioUnitario("");
  };

  useEffect(() => {
    obtenerDetalles();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="carrito-detalle-container">
      <h2>Detalles de Carrito</h2>

      {/* Formulario de creación del detalle carrito donde vendran los datos que guardaras del carrito y productos*/}
      <form className="form-detalle" onSubmit={crearDetalle}>
        <h3>Agregar Detalle</h3>
        <input
          type="number"
          placeholder="ID Carrito"
          value={idCarrito}
          onChange={(e) => setIdCarrito(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ID Producto"
          value={idProducto}
          onChange={(e) => setIdProducto(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio Unitario"
          value={precioUnitario}
          onChange={(e) => setPrecioUnitario(e.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>

      {/* Formulario de edición para que puedas actualizar los detalles */}
      {detalleEditado && (
        <form className="form-detalle" onSubmit={actualizarDetalle}>
          <h3>Editar Detalle</h3>
          <input
            type="number"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
          <button type="submit">Actualizar</button>
          <button type="button" onClick={() => setDetalleEditado(null)}>
            Cancelar
          </button>
        </form>
      )}

      {/* Listado para cada uno de los detalles */}
      <main className="detalle-lista">
        {detalles.map((det) => (
          <article key={det.id} className="detalle-card">
            <p><strong>ID Carrito:</strong> {det.id_carrito}</p>
            <p><strong>ID Producto:</strong> {det.id_producto}</p>
            <p><strong>Cantidad:</strong> {det.cantidad}</p>
            <p><strong>Precio Unitario:</strong> {det.precio_unitario}</p>
            <button onClick={() => eliminarDetalle(det.id)} className="btneliminar">Eliminar</button>
            <button onClick={() => editarDetalle(det)} className="btneditar">Editar</button>
          </article>
        ))}
      </main>
    </div>
  );
};

export default CarritoDetalle;

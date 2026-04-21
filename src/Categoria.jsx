import { useEffect, useState } from "react";
import apis from "./servicios/api";
import Formcateg from "./Agregarcategoria.jsx";
import "./Categoria.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoriaEditada, setCategoriaEditada] = useState(null);
  const [nombre, setNombre] = useState("");

  const obtenerCategorias = async () => {
    try {
      const response = await apis.get("/categorias/list");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      setError("No se pudieron cargar las categorías");
    } finally {
      setLoading(false);
    }
  };

  const eliminarCategoria = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta categoría?")) return;
    try {
      await apis.delete(`/categorias/${id}`);
      alert("Categoría eliminada correctamente");
      obtenerCategorias();
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
      alert("Error al eliminar categoría");
    }
  };

  const editarCategoria = (cat) => {
    setCategoriaEditada(cat);
    setNombre(cat.nombre);
  };

  const actualizarCategoria = async (e) => {
    e.preventDefault();
    try {
      await apis.put(`/categorias/${categoriaEditada.id}`, { nombre });
      alert("Categoría actualizada correctamente");
      setCategoriaEditada(null);
      setNombre("");
      obtenerCategorias();
    } catch (error) {
      console.error("Error al actualizar categoría:", error);
      alert("Error al actualizar categoría");
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <main className="categoria-container">
        {Array.isArray(categorias) &&
          categorias.map((cat) => (
            <article key={cat.id} className="categoria-card">
              <p className="categoria-titulo">
                <strong>{cat.nombre}</strong>
              </p>
              <p className="categoria-fecha">
                Creado: {new Date(cat.createdAt).toLocaleDateString()}
              </p>
              <button
                className="btn-eliminar"
                onClick={() => eliminarCategoria(cat.id)}
              >
                Eliminar
              </button>
              <button
                className="btn-editar"
                onClick={() => editarCategoria(cat)}
              >
                Editar
              </button>
            </article>
          ))}
      </main>

      {categoriaEditada && (
        <form className="form-editar" onSubmit={actualizarCategoria}>
          <h3>Editar Categoría</h3>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <button type="submit">Actualizar</button>
          <button type="button" onClick={() => setCategoriaEditada(null)}>
            Cancelar
          </button>
        </form>
      )}
      <Formcateg onCategoriaAgregada={obtenerCategorias} />
    </div>
    
  );
  
};


export default Categorias;

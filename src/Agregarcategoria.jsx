import { useState } from "react";
import apis from "./servicios/api";
import "./Agregarcategoria.css";

const AgregarCategoria = ({ onCategoriaAgregada }) => {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apis.post("/categorias", { nombre });
      alert("Categoría creada correctamente");
      setNombre("");
      if (onCategoriaAgregada) {
        onCategoriaAgregada(); // refresca lista en Categorias.jsx
      }
    } catch (error) {
      console.error("Error al crear categoría:", error);
      setError("No se pudo crear la categoría");
    }
  };

  return (
    <form className="form-agregar" onSubmit={handleSubmit}>
      <h3>Registrar Categoría</h3>
      <input
        type="text"
        placeholder="Nombre de la categoría"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default AgregarCategoria;

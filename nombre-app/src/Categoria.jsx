import { useEffect, useState } from "react";
import apis from "./servicios/apis";
import "./Categoria.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerCategorias = async () => {
    try {
      const response = await apis.get("/"); 
      // ya esta mandando a llamar la base url
      setCategorias(response.data.categories); 
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      setError("No se pudieron cargar las categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (  
    <div className="categoria-container">
      <h2 className="categoria">Categorías de comidas</h2>
      <ul>
        {categorias.map((cat) => (
          <li key={cat.idCategory}>
            <p><strong>{cat.strCategory}</strong></p>
            <img className="categoria-card" src={cat.strCategoryThumb} alt={cat.strCategory} width="100" />
            <p>{cat.strCategoryDescription?.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;